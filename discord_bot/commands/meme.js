const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = async (msg, args) => {
  let meme = await createMeme(args);
  msg.channel.send(meme);
};
async function createMeme(args) {
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name,
      cmd: memes.filter((m) => m.cmd === cmd).length > 0 ? `${cmd}${i}` : cmd,
      url: e.url,
      id: e.id,
    });
  });

  return addTextToMeme(memes, args);
}

async function addTextToMeme(memes, args) {
  let urlRoot = "https://api.imgflip.com/caption_image?";
  let cred = "username=chrisgrabs&password=bjorn1337";
  let id = memes.filter((m) => m.cmd === args[0]).map((m) => m.id);
  for (let i = 1; i < args.length; i++) {
    args[i] = args[i].split("-").join(" ");
  }
  let query = `&template_id=${id}&text0=${args[1] ?? ""}&text1=${
    args[2] ?? ""
  }`;

  let response = await fetch(`${urlRoot}${cred}${query}`);
  let json = await response.json();
  try {
    return json.data.url;
  } catch {
    return memes.filter((m) => m.cmd === args[0]).map((m) => m.url);
  }
}

const fetch = require("node-fetch");
const Discord = require("discord.js");
// Create meme command
module.exports = async (msg) => {
  let commands = msg.content.split(" ");
  let botCommand = {
    prefix: commands[0],
    name: commands[1],
    top: commands[2]?.split("-").join(" ") ?? "",
    bottom: commands[3]?.split("-").join(" ") ?? "",
  };

  if (botCommand.prefix != "!meme") return;

  let meme = await createMeme(botCommand);
  msg.channel.send({
    files: [
      {
        attachment: meme,
        name: "file.jpg",
      },
    ],
  });
};

// Create meme function
async function createMeme(obj) {
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name ?? "unknown",
      cmd: memes.filter((m) => m.cmd === cmd).length > 0 ? `${cmd}${i}` : cmd,
      url: e.url,
      id: e.id,
    });
  });
  console.log(memes.filter((m) => m.cmd === obj.name).map((m) => m.url));
  return addTextToMeme(memes, obj);
}
// Update meme with command input for text -> top/bottom
async function addTextToMeme(memes, obj) {
  let id = memes.filter((m) => m.cmd === obj.name).map((m) => m.id);
  let urlRoot = "https://api.imgflip.com/caption_image?";
  let cred = "username=chrisgrabs&password=bjorn1337";
  let query = `&template_id=${id}&text0=${obj.top}&text1=${obj.bottom}`;

  let response = await fetch(`${urlRoot}${cred}${query}`);
  let json = await response.json();

  return json.data.url;
}

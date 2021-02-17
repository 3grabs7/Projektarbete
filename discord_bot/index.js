require('dotenv').config();
const fetch = require("node-fetch");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

// Bot is ready
client.on("ready", () => {
  console.log("Connected as " + client.user.tag);
});

// GIF Command
client.on("message", async (msg) => {
  let commands = msg.content.split(' ');
  let prefix = commands[0];
  let searchTerm = commands[1];

  if(prefix != '!gif') return;

  let results = await getGif(searchTerm);
  let index = Math.floor(Math.random() * results.length);
  let randomGif = results[index];
  msg.channel.send({
    files: [
      {
        attachment: randomGif,
        name: "file.gif"
      }
    ]
  })
})

// Create meme command
client.on("message", async (msg) => {
  let commands = msg.content.split(' ');
  let botCommand = { 
    prefix:commands[0], 
    name:commands[1], 
    top:commands[2]?.split('-').join(' ') ?? '', 
    bottom:commands[3]?.split('-').join(' ') ?? ''
  };

  if(botCommand.prefix != '!meme') return;

  let meme = await createMeme(botCommand);
  msg.channel.send({
    files: [
      {
        attachment: meme,
        name: "file.jpg"
      }
    ]
  })
})

// Get schedule command
client.on("message", (msg) => {
  if (msg.content === "schema") {
    msg.reply("Här är schemat: ", {
      files: [
        {
          attachment: "https://i.imgur.com/IRZLFSE.png",
          name: "file.png",
        },
      ],
    });
  }
});

// Get GIF function
async function getGif(search_term) {
  // set the apikey and limit
  let apikey = "IUK0U580FPAU";
  // using default locale of en_US
  var search_url = `https://g.tenor.com/v1/search?q=${search_term}&key=${apikey}&limit=10`

  let response = await fetch(search_url);
  let json = await response.json();
  let array = json.results.map(r => r.media).map(a=>a[0]).map(g=>g.gif.url);
  return array;
}

// Create meme function
async function createMeme(obj) {
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name ?? "unknown",
      cmd: memes.includes({ cmd: cmd }) ? `${cmd}${i}` : cmd,
      url: e.url,
      id: e.id
    });
  });
  console.log(memes.filter(m => m.cmd === obj.name).map(m=>m.url));
  return addTextToMeme(memes, obj)
}
// Update meme with command input for text -> top/bottom
async function addTextToMeme(memes, obj) {
  let id = memes.filter(m => m.cmd === obj.name).map(m=>m.id);
  let urlRoot = 'https://api.imgflip.com/caption_image?';
  let cred = 'username=chrisgrabs&password=bjorn1337';
  let query = `&template_id=${id}&text0=${obj.top}&text1=${obj.bottom}`

  let response = await fetch(`${urlRoot}${cred}${query}`);
  let json = await response.json();

  return typeof json.data.url;
}
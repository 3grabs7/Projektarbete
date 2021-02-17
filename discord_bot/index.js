require("dotenv").config();
const fetch = require("node-fetch");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

// Bot is ready
client.on("ready", () => {
  console.log("Connected as " + client.user.tag);
});

const div_commands = require("./div_commands");
const gif_command = require("./gif_command");
const meme_command = require("./meme_command");
client.on("message", div_commands);
client.on("message", gif_command);
client.on("message", meme_command);

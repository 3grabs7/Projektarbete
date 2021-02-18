require("dotenv").config();
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

// Bot is ready
client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("Connected as " + client.user.tag);
}

const commandHandler = require("./commands");
client.on("message", commandHandler);

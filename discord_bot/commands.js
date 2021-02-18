const Discord = require("discord.js");

const schedule = require("./commands/schedule");
const weblink = require("./commands/weblink");
const meme = require("./commands/meme");
const gif = require("./commands/gif");
const help = require("./commands/help");

const commands = {
  schedule,
  weblink,
  meme,
  gif,
  help,
};

module.exports = (msg) => {
  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    try {
      commands[command](msg, tokens);
    } catch {
      console.log("command not found");
    }
  }
};

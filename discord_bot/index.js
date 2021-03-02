//* Run node with server auto restart -> nodemon watch index --ext js --ignore '*.json'
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

//* Load local storage
if (typeof localStorage === 'undefined' || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
	console.log('Connected to local storage');
}

//* Forward commands
const commandHandler = require('./commands');
client.on('message', commandHandler);

//* Data collector from discord group
const dataHandler = require('./datahandler');

//* Event handler for groups
const groupsHandler = require('./groupshandler');
fs.watchFile('./scratch/groups.json', () => {
	groupsHandler(client);
});

//* Bot is ready
client.on('ready', readyDiscord);
function readyDiscord() {
	console.log('Connected as ' + client.user.tag);
	dataHandler(client);
}

//* Server
const serverExpress = require('./serverEXPRESS');

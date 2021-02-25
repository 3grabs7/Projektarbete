//* Run node with server auto restart -> nodemon watch index --ext js --ignore '*.json'

require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

//* Load local storage
if (typeof localStorage === 'undefined' || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
	console.log('Connected to local storage');
}

//* Bot is ready
client.on('ready', readyDiscord);
function readyDiscord() {
	console.log('Connected as ' + client.user.tag);
}

//* Forward commands
const commandHandler = require('./commands');
client.on('message', commandHandler);

const server = require('./server');

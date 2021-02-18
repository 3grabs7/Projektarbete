require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

if (typeof localStorage === 'undefined' || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
}
localStorage.setItem('myFirstKey', 'const dunder = { jupp: 123, nopp:420 }');
console.log(localStorage.getItem('myFirstKey'));

// Bot is ready
client.on('ready', readyDiscord);

function readyDiscord() {
	console.log('Connected as ' + client.user.tag);
}

const commandHandler = require('./commands');
client.on('message', commandHandler);

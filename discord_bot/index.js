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

/*
 * -----------------------------
 * TEST CODE FOR POSTING TO NODE *
 * -----------------------------
 */
var http = require('http');
var qs = require('querystring');
var serverPort = 8124;
http
	.createServer(function (request, response) {
		if (request.method === 'POST') {
			console.log(request);
		}
		response.statusMessage = 'ok';
		response.statusCode = 200;
		response.end();
	})
	.listen(serverPort);
console.log('Server running at localhost:' + serverPort);

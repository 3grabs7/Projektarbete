require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

if (typeof localStorage === 'undefined' || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
}
// syntax for adding to localstorage
// localStorage.setItem('myFirstKey', 'const dunder = { jupp: 123, nopp:420 }');

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

// Bot is ready
client.on('ready', readyDiscord);
function readyDiscord() {
	console.log('Connected as ' + client.user.tag);
	console.log('Server running at localhost:' + serverPort);
	console.log(localStorage.getItem('myFirstKey'));
}

const commandHandler = require('./commands');
client.on('message', commandHandler);

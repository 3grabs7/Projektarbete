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
//* syntax for adding to localstorage -> localStorage.setItem('myFirstKey', 'const dunder = { jupp: 123, nopp:420 }');

//* Connect bank for gambling command
const gamblingBank = require('./gamblingbank');

//* Bot is ready
client.on('ready', readyDiscord);
function readyDiscord() {
	gamblingBank();
	console.log('Connected as ' + client.user.tag);
	console.log('Server running at localhost:' + serverPort);
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

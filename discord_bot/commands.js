const schedule = require('./commands/schedule');
const weblink = require('./commands/weblink');
const meme = require('./commands/meme');
const gif = require('./commands/gif');
const help = require('./commands/help');
const gamble = require('./commands/gamble');
const hi = require('./commands/hi');
const poll = require('./commands/poll');
const leaderboard = require('./commands/leaderboard');
const creatememe = require('./commands/creatememe');
const upload = require('./commands/upload');
const serverinfo = require('./commands/serverinfo');

const commands = {
	schedule,
	weblink,
	meme,
	gif,
	help,
	gamble,
	hi,
	poll,
	leaderboard,
	creatememe,
	upload,
	serverinfo,
};

module.exports = (msg) => {
	let tokens = msg.content.split(/\s+/g);
	let command = tokens.shift();
	if (command.charAt(0) === '!') {
		command = command.substring(1);
		if (commands[command] != undefined) {
			commands[command](msg, tokens);
			return;
		}
		console.log('Invalid command');
	}
};

const schedule = require('./commands/schedule');
const weblink = require('./commands/weblink');
const meme = require('./commands/meme');
const gif = require('./commands/gif');
const help = require('./commands/help');
const gamble = require('./commands/gamble');
const createMeme = require('./commands/editImg');

const commands = {
	schedule,
	weblink,
	meme,
	gif,
	help,
	gamble,
	createMeme,
};

module.exports = (msg) => {
	let tokens = msg.content.split(/\s+/g);
	let command = tokens.shift();
	if (command.charAt(0) === '!') {
		command = command.substring(1);
		try {
			commands[command](msg, tokens);
		} catch {
			console.log('command not found');
		}
	}
};

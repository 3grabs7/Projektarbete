const schedule = require('./commands/schedule');
const weblink = require('./commands/weblink');
const meme = require('./commands/meme');
const gif = require('./commands/gif');
const help = require('./commands/help');
const gamble = require('./commands/gamble');
const hi = require('./commands/hi');
const findnewmeme = require('./commands/findNewmeme');

const commands = {
	schedule,
	weblink,
	meme,
	gif,
	help,
	gamble,
	hi,
	findnewmeme,
};

module.exports = (msg) => {
	let tokens = msg.content.split(/\s+/g);
	let command = tokens.shift();
	if (command.charAt(0) === '!') {
		command = command.substring(1);
		try {
			commands[command](msg, tokens);
		} catch (err) {
			console.log(`${err}`);
		}
	}
};

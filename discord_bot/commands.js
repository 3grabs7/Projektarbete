const schedule = require('./commands/schedule');
const weblink = require('./commands/weblink');
const meme = require('./commands/meme');
const gif = require('./commands/gif');
const help = require('./commands/help');
const gamble = require('./commands/gamble');
const hi = require('./commands/hi');
const poll = require('./commands/poll');
const leaderboard = require('./commands/gambleleaderboard');
const creatememe = require('./commands/creatememe');
const upload = require('./commands/upload');
const serverinfo = require('./commands/serverinfo');
const groups = require('./commands/groups');
const clearspam = require('./commands/spamhandler');
const status = require('./commands/updatestatus');
const roles = require('./commands/roles');

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
	groups,
	clearspam,
	status,
	roles,
};

module.exports = (msg, client) => {
	let tokens = msg.content.split(/\s+/g);
	let command = tokens.shift();
	if (command.charAt(0) === '!') {
		command = command.substring(1);
		if (commands[command] != undefined) {
			commands[command](msg, tokens, client);
			return;
		}
		console.log('Invalid command');
	}
};

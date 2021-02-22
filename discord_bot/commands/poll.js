const fetch = require('node-fetch');

module.exports = function (msg, args) {
	if (!args[0]) {
		msg.reply('You have to give us a poll question!');
		return;
	}

	let msArgs = args.join(' ');

	let count = 0;
	msg.reply('📃 ' + '**' + msArgs + '**').then((messageReaction) => {
		messageReaction.react('👍');
		messageReaction.react('👎');
	});
	msg.delete();
};

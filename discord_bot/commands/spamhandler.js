const { Message } = require('discord.js');

module.exports = function (msg, args) {
	if (!msg.member.hasPermission('ADMINISTRATOR')) {
		msg.channel.send("That's an administrator thing!");
		return;
	}
	msg.channel.messages.fetch().then((results) => {
		let msgsToDelete = results.filter(
			(oldMsgs) => oldMsgs.author.bot || oldMsgs.content[0] === '!'
		);
		console.log(
			`${
				Array.from(msgsToDelete).length
			} msgs which were from a bot or that contained bot command, were deleted in Server : ${
				msg.guild.name
			}, Channel : ${msg.channel.name}`
		);
		msg.channel.bulkDelete(msgsToDelete);
		msg.channel.send(
			'An administrator just cleaned up your spam, show some respect and chill the fuck out'
		);
	});
};

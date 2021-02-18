module.exports = function (msg, args) {
	let user1 = msg.member.user;
	let user2 = args[0].replace(/[^0-9]/g, '');
	let bet = args[1];

	msg.channel.send(
		`<@!${user2}>!\n**${user1.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!accept** or **!decline** ?`
	);
};

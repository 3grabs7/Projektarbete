module.exports = function (msg, args) {
	let user1 = msg.member.user;
	let user2 = args[0].replace(/[^0-9]/g, '');
	let bet = args[1];
	let userBalances = JSON.parse(localStorage.getItem('gambleBalance'));

	user1Balance = userBalances.users
		.filter((u) => u.id === user1.id)
		.map((u) => u.balance);
	user2Balance = userBalances.users
		.filter((u) => u.id === user2)
		.map((u) => u.balance);

	if (bet > user1Balance) {
		msg.channel.send(
			`<@!${user1.id}>, I'm afraid you're a bit short for that bet. **Current balance : ${user1Balance}**`
		);
		return;
	}
	msg.channel.send(
		`<@!${user2}>!\n**${user1.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!accept** or **!decline** ?`
	);
};

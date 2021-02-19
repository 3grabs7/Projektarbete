module.exports = function (msg, args) {
	let user1 = msg.member.user;
	let user2 = args[0].replace(/[^0-9]/g, '');
	let bet = parseInt(args[1]);

	let userBalances = JSON.parse(localStorage.getItem('gambleBalance'));
	user1Balance = userBalances.users
		.filter((u) => u.id === user1.id)
		.map((u) => u.balance);
	user2Balance = userBalances.users
		.filter((u) => u.id === user2)
		.map((u) => u.balance);

	if (hasActiveBet(user1.id)) {
		msg.channel.send(`<@!${user1.id}>, you still have a pending bet, chill.`);
		return;
	}

	if (bet > user1Balance) {
		msg.channel.send(
			`<@!${user1.id}>, I'm afraid you're a bit short for that bet. **Current balance : ${user1Balance}**`
		);
		return;
	}

	if (bet > user2Balance) {
		msg.channel.send(
			`<@!${user1.id}>,  <@!${user2}> can't take that bet, that dude's poooor. **Their balance : ${user2Balance}**`
		);
		return;
	}

	msg.channel.send(
		`<@!${user2}>!\n**${user1.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!accept** or **!decline** ?`
	);
};

function hasActiveBet(userId) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets'));
	return activeBets.bets.filter((b) => b.challenger === userId).length > 0;
}

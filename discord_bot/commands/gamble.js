const gambleResponse = require('./gambleresponse');

module.exports = function (msg, args) {
	if (args[0] === 'accept' || args[0] === 'decline') {
		gambleResponse(msg, args[0]);
		return;
	}

	let challenger = msg.member.user;
	let challenged = args[0].replace(/[^0-9]/g, '');
	let bet = parseInt(args[1]);

	let userBalances = JSON.parse(localStorage.getItem('gambleBalance'));
	challengerBalance = userBalances.users
		.filter((u) => u.id === challenger.id)
		.map((u) => u.balance);
	challengedBalance = userBalances.users
		.filter((u) => u.id === challenged)
		.map((u) => u.balance);

	if (hasActiveBet(challenger.id)) {
		msg.channel.send(
			`<@!${challenger.id}>, you still have a pending bet, chill.`
		);
		return;
	}

	if (bet > challengerBalance) {
		msg.channel.send(
			`<@!${challenger.id}>, I'm afraid you're a bit short for that bet. **Current balance : ${challengerBalance}**`
		);
		return;
	}

	if (bet > challengedBalance) {
		msg.channel.send(
			`<@!${challenger.id}>,  <@!${challenged}> can't take that bet, that dude's poooor. **Their balance : ${challengedBalance}**`
		);
		return;
	}

	logBet(challenger.id, challenged, bet);
	msg.channel.send(
		`<@!${challenged}>!\n**${challenger.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!gamble accept** or **!gamble decline** ?`
	);
};

function hasActiveBet(userId) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets'));
	return activeBets.bets.filter((b) => b.challenger === userId).length > 0;
}

function logBet(challenger, challenged, bet) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets'));
	activeBets.bets.push({
		challenger: challenger,
		challenged: challenged,
		bet: bet,
	});
	localStorage.setItem('activeBets', JSON.stringify(activeBets));
	console.log('Bet logged');
	console.log(localStorage.getItem('activeBets'));
}

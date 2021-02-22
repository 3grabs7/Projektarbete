const gambleResponse = require('./gambleresponse');
const gambleLeaderboard = require('./gambleleaderboard');

module.exports = function (msg, args) {
	if (args[0] === 'accept' || args[0] === 'decline') {
		gambleResponse(msg, args[0]);
		return;
	}

	if (args[0] === 'leaderboard') {
		gambleLeaderboard(msg);
		return;
	}

	let challenger = msg.member.user;
	let respondent = args[0].replace(/[^0-9]/g, '');
	let bet = parseInt(args[1]);

	let userBalances = JSON.parse(localStorage.getItem('gambleBalance.json'));
	challengerBalance = userBalances.users
		.filter((u) => u.id === challenger.id)
		.map((u) => u.balance);
	respondentBalance = userBalances.users
		.filter((u) => u.id === respondent)
		.map((u) => u.balance);

	if (challenger.id === respondent) {
		msg.channel.send(`You can't challenge yourself, morron.`);
		return;
	}

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

	if (bet > respondentBalance) {
		msg.channel.send(
			`<@!${challenger.id}>,  <@!${respondent}> can't take that bet, that dude's poooor. **Their balance : ${respondentBalance}**`
		);
		return;
	}

	if (!isValidUser(respondent)) {
		msg.channel.send(`That's not a real person, do better!`);
	}
	logBet(challenger.id, respondent, bet);
	msg.channel.send(
		`<@!${respondent}>!\n**${challenger.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!gamble accept** or **!gamble decline** ?`
	);
};

function hasActiveBet(userId) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	return activeBets.bets.filter((b) => b.challenger === userId).length > 0;
}

function isValidUser(userId) {}

function logBet(challenger, respondent, bet) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	activeBets.bets.push({
		challenger: challenger,
		respondent: respondent,
		bet: bet,
	});
	localStorage.setItem('activeBets.json', JSON.stringify(activeBets));
	console.log('Bet logged');
}

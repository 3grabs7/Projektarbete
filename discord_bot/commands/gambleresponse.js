module.exports = function (msg, args) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));

	let respondent = msg.member.user.id;
	let bet = activeBets.bets.filter((b) => b.respondent === respondent);
	let challenger = bet.challenger;
	let betAmt = bet.bet;

	let isChallenged =
		activeBets.bets.filter((b) => b.respondent === respondent).length > 0;

	if (isChallenged) {
		if (args === 'accept') {
			msg.channel.send(`<@!${respondent}>, LET'$ GO!`);
			msg.channel.send(runBet(respondent, challenger, betAmt));
			scrapBet(activeBets, challenger, respondent);
			return;
		}
		if (args === 'decline') {
			msg.channel.send(
				`<@!${challenger}>, it seems like <@!${respondent}> was really just a coward all along.`
			);
			scrapBet(activeBets, challenger, respondent);
			return;
		}
	}

	msg.channel.send(
		`<@!${respondent}>, no one's betting with you, don't embarrass yourself!`
	);
};

function runBet(challenger, respondent, betAmt) {
	let outcome = Math.floor(Math.random() * (100 - 1)) + 1;
	if (outcome > 50) {
		return `<@!${challenger}> **won!** <@!${respondent} **sucks!**> \n${settleBet(
			challenger,
			respondent,
			betAmt
		)}`;
	}
	return `<@!${respondent}> **won!** <@!${challenger} **sucks!**> \n${settleBet(
		respondent,
		challenger,
		betAmt
	)}`;
}
function settleBet(winner, loser, betAmt) {
	let gambleBalance = JSON.parse(localStorage.getItem('gambleBalance.json'));
	gambleBalance.users
		.filter((user) => user.id === winner)
		.map((user) => (user.balance += betAmt));
	gambleBalance.users
		.filter((user) => user.id === loser)
		.map((user) => (user.balance -= betAmt));
	console.log(`register transactions in ${gambleBalance}`);
	return `<@!${winner}'s balance : **{COINS HERE}**. <@!${loser}'s balance : **{COINS HERE}**.>`;
}

function scrapBet(activeBets, challenger, respondent) {
	let updatedBets = activeBets.bets.filter(
		(b) => b.challenger != challenger && b.respondent != respondent
	);
	localStorage.setItem(
		'activeBets.json',
		JSON.stringify({ bets: updatedBets })
	);
}

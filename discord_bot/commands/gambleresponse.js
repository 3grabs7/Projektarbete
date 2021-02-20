module.exports = function (msg, args) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	let respondent = msg.member.user.id;
	let challenger = activeBets.bets
		.filter((b) => b.respondent == respondent)
		.map((b) => b.challenger)[0];
	let betAmt = activeBets.bets
		.filter((b) => b.respondent == respondent)
		.map((b) => b.bet)[0];
	let isChallenged =
		activeBets.bets.filter((b) => b.respondent == respondent).length > 0;

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

function runBet(respondent, challenger, betAmt) {
	let outcome = Math.floor(Math.random() * (100 - 1)) + 1;
	if (outcome > 50) {
		return `<@!${challenger}> **won!** <@!${respondent}> **sucks!** \n${settleBet(
			challenger,
			respondent,
			betAmt
		)}`;
	}
	return `<@!${respondent}> **won!** <@!${challenger}> **sucks!** \n${settleBet(
		respondent,
		challenger,
		betAmt
	)}`;
}
function settleBet(winner, loser, betAmt) {
	let gambleBalance = JSON.parse(localStorage.getItem('gambleBalance.json'));
	console.log(winner);
	console.log(loser);
	gambleBalance.users.filter((user) => user.id === winner).balance += betAmt;
	gambleBalance.users.filter((user) => user.id === loser).balance -= betAmt;
	localStorage.setItem('gambleBalance.json', JSON.stringify(gambleBalance));
	return `<@!${winner}>'s balance : **{COINS HERE}**. <@!${loser}>'s balance : **{COINS HERE}**.`;
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

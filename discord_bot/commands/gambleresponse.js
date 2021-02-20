module.exports = function (msg, args) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	let respondent = msg.member.user.id;
	let challenger = activeBets.bets
		.filter((b) => b.respondent === respondent)
		.map((b) => b.challenger);

	let isChallenged =
		activeBets.bets.filter((b) => b.respondent === respondent).length > 0;

	if (isChallenged) {
		if (args === 'accept') {
			msg.channel.send(`<@!${respondent}>, LET'$ GO!`);
			msg.channel.send(runBet(msg, respondent, challenger));
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

function scrapBet(activeBets, challenger, respondent) {
	let updatedBets = activeBets.bets.filter(
		(b) => b.challenger != challenger && b.respondent != respondent
	);
	localStorage.setItem(
		'activeBets.json',
		JSON.stringify({ bets: updatedBets })
	);
}

function runBet(activeBets, challenger, respondent) {
	settleBet();
	return `We toss coin here`;
}
function settleBet() {
	console.log('We transfer coins here');
}

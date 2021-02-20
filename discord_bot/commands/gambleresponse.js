module.exports = function (msg, args) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets'));
	let respondent = msg.member.user.id;
	let challenger = activeBets.bets
		.filter((b) => b.challenged === respondent)
		.map((b) => b.challenger);

	let isChallenged =
		activeBets.bets.filter((b) => b.challenged === respondent).length > 0;

	if (isChallenged) {
		if (args === 'accept') {
			msg.channel.send(
				`<@!${respondent}>, we're not quiet there yet but good for you`
			);
			return;
		}
		if (args === 'decline') {
			msg.channel.send(
				`<@!${challenger}>, it seems like <@!${respondent}> was really just a coward all along.`
			);
			return;
		}
	}

	msg.channel.send(`<@!${respondent}>, you're not even challenged!`);
};

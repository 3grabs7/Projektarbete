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

	if (!isValidUser(respondent)) {
		msg.channel.send(`That's not a real person, do better!`);
		return;
	}

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

	logBet(challenger.id, respondent, bet, msg);
	msg.channel.send(
		`<@!${respondent}>!\n**${challenger.username.toUpperCase()}** wants to get some gambling going.The bet is **${bet}**.\n - Will you **!gamble accept** or **!gamble decline** ?`
	);
};

function hasActiveBet(userId) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	return activeBets.bets.filter((b) => b.challenger === userId).length > 0;
}

function isValidUser(userId) {
	return (
		JSON.parse(localStorage.getItem('gambleBalance.json')).users.filter(
			(u) => u.id === userId
		).length > 0
	);
}

function logBet(challenger, respondent, bet, msg) {
	let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	activeBets.bets.push({
		challenger: challenger,
		respondent: respondent,
		bet: bet,
	});
	localStorage.setItem('activeBets.json', JSON.stringify(activeBets));

	console.log('Bet logged');

	setTimeout(() => {
		console.log(challenger, respondent);
		let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
		let betActive =
			activeBets.bets.filter(
				(b) => b.challenger == challenger && b.respondent == respondent
			).length > 0;
		if (betActive) {
			let betResolvedCheck = activeBets.bets.filter(
				(b) => b.challenger != challenger && b.respondent != respondent
			);
			localStorage.setItem(
				'activeBets.json',
				JSON.stringify({ bets: betResolvedCheck })
			);
			msg.channel.send(
				`The bet between <@!${challenger}> and <@!${respondent}> expired. kys`
			);
			console.log('Bet expired -> Removed');
		}
	}, 60000);

	//2015 lösningen Clojure
	// setTimeout(
	// 	(function () {
	// 		var challenger = challenger;
	// 		var respondent = respondent;
	// 		return function () {
	// 			console.log(challenger, respondent);
	// 			let activeBets = JSON.parse(localStorage.getItem('activeBets.json'));
	// 			let betActive =
	// 				activeBets.bets.filter(
	// 					(b) => b.challenger == challenger && b.respondent == respondent
	// 				).length > 0;
	// 			if (betActive) {
	// 				let betResolvedCheck = activeBets.bets.filter(
	// 					(b) => b.challenger != challenger && b.respondent != respondent
	// 				);
	// 				localStorage.setItem(
	// 					'activeBets.json',
	// 					JSON.stringify({ bets: betResolvedCheck })
	// 				);
	// 				msg.channel.send(
	// 					`The bet between <@!${challenger}> and <@!${respondent}> expired. kys`
	// 				);
	// 				console.log('Bet expired -> Removed');
	// 			}
	// 		};
	// 	})(),
	// 	2000
	// );
}

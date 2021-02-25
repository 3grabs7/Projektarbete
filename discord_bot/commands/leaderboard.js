module.exports = function (msg) {
	let leaderboard = '** | Leaderboard | ** \n';

	let balances = JSON.parse(localStorage.getItem('gambleBalance.json'));
	let output = balances.users.sort((a, b) => {
		if (a.balance > b.balance) {
			return -1;
		}
		if (a.balance < b.balance) {
			return 1;
		}
		return 0;
	});
	output.forEach((user, i) => {
		leaderboard += `[${i + 1}.] - ${user.name} : ${user.balance}\n`;
	});

	msg.channel.send(leaderboard);
};

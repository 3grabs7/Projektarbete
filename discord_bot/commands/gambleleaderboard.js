module.exports = function (msg) {
	let balances = JSON.parse(localStorage.getItem('gambleBalance.json'));
	let leaderboard = '';
	balances.users.forEach((user) => {
		leaderboard += `${user.name} : ${user.balance}\n`;
	});
	msg.channel.send(`**Leaderboard** : \n${leaderboard}`);
};

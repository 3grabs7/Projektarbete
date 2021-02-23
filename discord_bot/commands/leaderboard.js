module.exports = function (msg) {
	let leaderboard = '** | Leaderboards | ** \n';

	let balances = JSON.parse(localStorage.getItem('gambleBalance.json'));
	leaderboard += ` - Gambling : \n`;
	balances.users.forEach((user) => {
		leaderboard += `${user.name} : ${user.balance}\n`;
	});

	let users = msg.channel.guild.members;
	leaderboard += ` - No-life : \n`;
	let messagesSent = '';

	msg.channel.send(leaderboard + users);
};

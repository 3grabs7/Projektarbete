const userIds = JSON.parse(localStorage.getItem('userids.json')).users.map(
	(user) => user.id
);

module.exports = function (client) {
	startUpMsg(client);

	client.on('message', (msg) => {
		const author = msg.author;
	});

	client.on('reaction', (msg) => {
		const author = msg.author;
	});
};

function startUpMsg(client) {
	let msg = 'Connecter to servers : \n';
	client.guilds.cache.forEach((guild) => {
		msg += `Guild : ${guild.name}, Members Count : ${guild.memberCount}\n`;
	});
	console.log(msg);
}

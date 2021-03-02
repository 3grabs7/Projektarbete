module.exports = function (msg, args) {
	const userIds = JSON.parse(localStorage.getItem('userids.json')).users;
	const json = JSON.parse(localStorage.getItem('groups.json'));

	if (!json.groups) {
		msg.channel.send('There are no groups at the moment.');
		return;
	}

	if (!args[0]) {
		let response = '**Groups**\n';
		json.groups.forEach((group) => {
			response += `Grupp ${group.groupId} - `;
			group.members.forEach((member) => (response += `${member}, `));
			response = response.slice(0, response.length - 2);
			response += `\n`;
		});
		msg.channel.send(response);
		return;
	}

	if (args[0] === 'get') {
		let usersGroup = -1;
		let authorId = msg.author.toString().replace(/[^0-9]/g, '');
		let userName = userIds.filter((user) => user.id === authorId)[0].name;

		json.groups.forEach((g) => {
			g.members.forEach((m) => {
				if (m.toLowerCase() === userName.toLowerCase()) {
					usersGroup = g.groupId;
				}
			});
		});

		if (usersGroup === -1) {
			msg.reply('You got no group man, sorry');
			return;
		}
		msg.reply(`Your in group ${usersGroup}, stop stalling`);
	}
};

const userIds = {
	Robin: 123,
	Nånannan: 321,
};

module.exports = function (msg, args) {
	const json = JSON.parse(localStorage.getItem('groups.json'));

	if (!args[0]) {
		let response = '**Groups**\n';
		json.groups.forEach((group) => {
			response += `Grupp ${group.group} - `;
			group.members.forEach((member) => (response += `${member}, `));
			response = response.slice(0, response.length - 2);
			response += `\n`;
		});
		msg.channel.send(response);
		return;
	}
	let user = ''; //* Find name from userid in object userIds
	let usersGroup = 0;
	json.groups.forEach((g) => {
		g.members.forEach((m) => {
			if (m === user) {
				usersGroup = g;
			}
		});
	});
	msg.reply(`Your in group ${usersGroup}, stop stalling`);
};

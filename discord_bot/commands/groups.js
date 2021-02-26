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
	msg.reply(`Your in group <>, stop stalling`);
};

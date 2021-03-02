const userIds = require('./public/discorddata/data').users;

module.exports = function (client) {
	const json = JSON.parse(localStorage.getItem('groups.json'));

	if (!json.groups) {
		console.log('The updated groups data was empty or corrupt');
		return;
	}

	let response = 'Groups just got updated : \n**Groups**\n';
	json.groups.forEach((group) => {
		response += `Grupp ${group.groupId} - `;
		group.members.forEach((member) => (response += `${member}, `));
		response = response.slice(0, response.length - 2);
		response += `\n`;
	});

	const memeGuild = client.guilds.cache.find(
		(guild) => guild.name === 'meme_bot_lair'
	);
	const memeGuildGeneral = memeGuild.channels.cache.find(
		(channel) => channel.name === 'general'
	);
	const gbgGuild = client.guilds.cache.find(
		(guild) => guild.name === 'Göteborg Hangout'
	);
	const gbgGuildGeneral = gbgGuild.channels.cache.find(
		(channel) => channel.name === 'general'
	);

	memeGuildGeneral.send(`@everyone ${response}`);
	// gbgGuildGeneral.send(`@everyone ${response}`);

	// createChannels(json.groups, memeGuild);
};

function createChannels(obj, memeGuild) {
	for (let i = 0; i < obj.length; i++) {
		if (
			memeGuild.channels.cache.find(
				(channel) => channel.name === `Grupp:${obj[i].groupId}`
			)
		) {
			console.log('channel already exists');
			continue;
		}
		memeGuild.channels
			.create(`Grupp:${obj[i].groupId}`, {
				type: 'text',
			})
			.then((channel) => {
				for (let j = 0; j < obj[i].members.length; j++) {
					let userId = userIds.filter(
						(user) => user.name === obj[i].members[j]
					)[0].id;
					console.log(userId);

					let user = memeGuild.members.cache.find((user) => user.id === userId);
					console.log(user);
					// user.textChannel.join(channel);
					// channel.addMember(user);
				}
			});
	}
}

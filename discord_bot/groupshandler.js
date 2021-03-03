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

	createChannels(json.groups, memeGuild);
};

function createChannels(obj, memeGuild) {
	for (let i = 0; i < obj.length; i++) {
		// check if category exists
		if (
			memeGuild.channels.cache.find(
				(channel) => channel.name === `Grupp:${obj[i].groupId}`
			)
		) {
			console.log('channel already exists');
			continue;
		}
		// Create category for group 'i'
		memeGuild.channels
			.create(`Grupp:${obj[i].groupId}`, {
				type: 'category',
				permissionOverwrites: [
					{
						id: memeGuild.me.roles.highest,
						allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_ROLES'],
					},
				],
			})
			.then(async (channel) => {
				// create text channel in category 'i'
				memeGuild.channels
					.create('Chat osv', { type: 'text' })
					.then((textChannel) => {
						textChannel.setParent(channel);
					});

				// create voice channel in category 'i'
				memeGuild.channels
					.create('Snack osv', { type: 'voice' })
					.then((voiceChannel) => {
						voiceChannel.setParent(channel);
					});

				// remove view permission for everyone (except admin/creator)
				channel.updateOverwrite(channel.guild.roles.everyone, {
					VIEW_CHANNEL: false,
				});

				// Add view permission for each member of group 'i'
				for (let j = 0; j < obj[i].members.length; j++) {
					// get id from json
					let userId = userIds.filter(
						(user) => user.name === obj[i].members[j]
					)[0].id;
					console.log(userId);
					// get user object from user id  //* TODO - find doesn't work, read documentation
					let user = await memeGuild.members.fetch(userId);
					console.log(user);

					channel.updateOverwrite(user, { VIEW_CHANNEL: true });
				}
			});
	}
}

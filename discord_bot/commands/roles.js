//* IN PROGRESS
const emojis = {
	leg: 'Underknät',
	clown_face: 'Jobbig',
	zipper_mouth_face: 'Förtryckt',
	doughnut: 'Elit',
};

module.exports = function (msg, args, client) {
	const memeGuild = client.guilds.cache.find(
		(guild) => guild.name === 'meme_bot_lair'
	);
	const memeGuildRoles = memeGuild.channels.cache.find(
		(channel) => channel.name === 'roles'
	);
	const gbgGuild = client.guilds.cache.find(
		(guild) => guild.name === 'Göteborg Hangout'
	);
	const gbgGuildRoles = gbgGuild.channels.cache.find(
		(channel) => channel.name === 'roles'
	);

	msg.channel.send(`Test : ${getEmoji('leg')}`);
};

function getEmoji(memeGuild, emojiName) {
	return client.emojis.cache.find((emoji) => emoji.name === emojiName);
}

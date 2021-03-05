//* IN PROGRESS
module.exports = async function (msg, args) {
	console.log('serverinfo ready');

	const { guild } = msg;

	const { name, region, memberCount, members } = guild;
	const icon = guild.iconURL();

	let guildMembers = await guild.members.fetch();

	console.log(name, region, memberCount, icon);
};

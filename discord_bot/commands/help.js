const Discord = require('discord.js');

module.exports = function (msg, args) {
	const embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Meme Dream')
		.setURL('https://3grabs7.github.io/Projektarbete/')
		.setAuthor(
			'ChrisRob',
			'https://data.apksum.com/cb/com.jetfuel.colormeme/10.0/icon.png'
		)
		.setDescription('Commands osv, ni fattar')
		.setThumbnail(
			'https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg'
		)
		.addFields(
			{ name: '!weblink', value: 'Visit out page, please', inline: false },
			{
				name: '!gif <Search Term> (optional)<Number>',
				value: 'Get some GIF, get numbers at website',
				inline: false,
			},
			{
				name: '!meme <Meme Code> <Text 1> <Text 2>',
				value: 'Make your meme, get codes at website',
				inline: false,
			},
			{ name: '!schedule', value: 'No escuses', inline: false }
		)
		// .setImage(
		//   "https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg"
		// )
		.setTimestamp()
		.setFooter('Speak your memes');

	msg.reply(embed);
};

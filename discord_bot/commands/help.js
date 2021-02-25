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
			{ name: '!weblink', value: 'Visit our page, please.', inline: false },
			{
				name: '!gif <Search Term> (optional)<Number>',
				value: 'Get your GIFs, check out website for those numbers.',
				inline: false,
			},
			{
				name: '!meme <Meme Code> <Text 1> <Text 2>',
				value: 'Make your dreams memes, check out website for codes.',
				inline: false,
			},
			{
				name: '!schedule <month>',
				value: 'Never late. No escuses.',
				inline: false,
			},
			{
				name: '!gamble <User> <Bet amount>',
				value:
					'Get likes -> Get coins -> Addict. !gamble accept/decline to respond.',
				inline: false,
			},
			{
				name: '!hi',
				value: 'Socially awkward? I got you.',
				inline: false,
			},
			{
				name: '!uploadmeme <path> <command for img>',
				value: 'path = C:/xxx/xxx/xx/img.jpg.',
				inline: false,
			},
			{
				name: '!ownmeme <command for img> <text on meme>',
				value: '<command for img> = same command you put on uploadmeme. ',
				inline: false,
			}
		)
		// .setImage(
		//   "https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg"
		// )
		.setTimestamp()
		.setFooter('Speak your memes');

	msg.reply(embed);
};

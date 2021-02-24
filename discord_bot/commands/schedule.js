const fetch = require('node-fetch');

module.exports = function (msg, args) {
	if (args[0] == 'februari' || args[0] == 'feb') {
		msg.reply('Från 4 januari: ', {
			files: [
				{
					attachment: 'https://i.imgur.com/IRZLFSE.png',
					name: 'file.png',
				},
			],
		});
	} else if (args[0] == 'mars' || args[0] == 'march') {
		msg.reply('Until 10th', {
			files: [
				{
					attachment: 'https://i.imgur.com/IRZLFSE.png',
					name: 'file.png',
				},
			],
		});
		msg.reply('från 11 Mars: ', {
			files: [
				{
					attachment: 'https://i.imgur.com/0f0oCxD.png',
					name: 'file.png',
				},
			],
		});
	} else if (args[0] == 'april') {
		msg.reply('Från 11 Mars: ', {
			files: [
				{
					attachment: 'https://i.imgur.com/0f0oCxD.png',
					name: 'file.png',
				},
			],
		});
	} else if (args[0] == 'maj' || args[0] == 'june' || args[0] == 'juni')
		msg.reply('Från 26 Maj: ', {
			files: [
				{
					attachment: 'https://i.imgur.com/JPC13fK.png',
					name: 'file.png',
				},
			],
		});
};

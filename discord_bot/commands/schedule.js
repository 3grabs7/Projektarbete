module.exports = function (msg, args) {
	msg.reply('Här är schemat: ', {
		files: [
			{
				attachment: 'https://i.imgur.com/IRZLFSE.png',
				name: 'file.png',
			},
		],
	});
};

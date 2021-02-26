const fs = require('fs');
const request = require('request');

module.exports = function (msg, args) {
	let img = msg.attachments.first();

	request.head(img.url, (err, res, body) => {
		request(img.url)
			.pipe(
				fs.createWriteStream(
					`.public/imguploads/${args[0]}.${img.url.split('.').slice(-1)[0]}`
				)
			)
			.on('close', () => console.log('done'));
	});
};

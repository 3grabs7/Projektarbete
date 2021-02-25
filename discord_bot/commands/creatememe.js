const path = require('path');
const http = require('https');
const fs = require('fs');
const clientId = 'HXIgZwV4kRP6NH3nnSRr4AQ6BRZ';
const clientSecret =
	'KbeglfeGnssK7btwZ5s/wCPGIJB+Qg7UPmh4THQ/ETvIA6S8ZM/h9PE0D79zqyNY3WF1VaOyFKVUulHYATSqXg==';

module.exports = function (msg, args) {
	const options = {
		method: 'POST',
		hostname: 'api.sirv.com',
		path: '/v2/token',
		headers: {
			'content-type': 'application/json',
		},
	};

	const req = http.request(options, (res) => {
		const chunks = [];
		res.on('data', (chunk) => {
			chunks.push(chunk);
		});
		res.on('end', () => {
			//* Callback when token is generated and returned
			const body = Buffer.concat(chunks);
			const token = JSON.parse(body.toString()).token;
			loadImageWithAddedText(msg, args, token);
		});
	});
	req.write(
		JSON.stringify({
			clientId,
			clientSecret,
		})
	);
	req.end();
};

function loadImageWithAddedText(msg, args, token) {
	const filePath = path.join(__dirname, `../uploadedimgs`, `${args[0]}.jpg`);

	if (!fs.existsSync(filePath)) {
		console.log(
			`Image : ${filePath.split('\\').slice(-1)[0]}\nError : File not found`
		);
		return;
	}
	fs.readFile(filePath, (err, fileData) => {
		let options = {
			method: 'POST',
			hostname: 'api.sirv.com',
			port: null,
			path: `/v2/files/upload?filename=%2Fpath%2Fto%2F${filePath}.jpg`,
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		};
		let req = http.request(options);
		req.write(fileData, (err) => {
			if (!err) {
				msg.reply({
					files: [
						{
							attachment: `https://abinkpoo.sirv.com/path/to/${args[0]}.jpg?text=${args[1]}&text.color=FFFFFF&text.font.weight=extra-bold&text.font.size=28&text.position.gravity=center&text.position.y=50`,
							name: 'file.png',
						},
					],
				});
				return;
			}
			console.log(err);
		});
		req.end();
	});
}

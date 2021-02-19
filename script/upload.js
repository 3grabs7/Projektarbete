function upload(url) {
	const http = 'https';

	const options = {
		method: 'POST',
		hostname: 'api.sirv.com',
		path: '/v2/token',
		headers: {
			'content-type': 'application/json',
		},
	};

	const clientId = 'HXIgZwV4kRP6NH3nnSRr4AQ6BRZ';
	const clientSecret =
		'KbeglfeGnssK7btwZ5s/wCPGIJB+Qg7UPmh4THQ/ETvIA6S8ZM/h9PE0D79zqyNY3WF1VaOyFKVUulHYATSqXg==';

	const req = http.request(options, (res) => {
		const chunks = [];

		res.on('data', (chunk) => {
			chunks.push(chunk);
		});

		res.on('end', () => {
			const body = Buffer.concat(chunks);
			const apiResponse = JSON.parse(body.toString());

			console.log('token:', apiResponse.token);
			console.log('expiresIn:', apiResponse.expiresIn);
			console.log('scope:', apiResponse.scope);
		});
	});

	req.write(
		JSON.stringify({
			clientId,
			clientSecret,
		})
	);

	req.end();

	var request = require('request');
	var fs = require('fs');
	let inputFile = document.querySelector('#inputImg');
	fs.readFile(inputFile, (err, data) => {
		if (err) throw err;

		var options = {
			method: 'POST',
			url: 'https://api.sirv.com/v2/files/upload',
			qs: { filename: '/path/to/uploaded-image.jpg' },
			headers: {
				'content-type': 'image/jpeg',
				authorization: 'Bearer eyJhb...BZCSg',
			},
			body: data,
		};

		request(options, function (error, response, body) {
			if (error) throw new Error(error);

			console.log(body);
		});
	});
}

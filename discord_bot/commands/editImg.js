//Fixa så vi får rätt query
document.querySelector('.uploadImgAndCommand').addEventListener('click', () => {
	getImage();
});

/* --------- fetchar till Sirv server där våra bilder skall lagras ----- */
const http = require('https');
let token = ' ';
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
		getImage(apiResponse.token);
	});
});
req.write(
	JSON.stringify({
		clientId,
		clientSecret,
	})
);
req.end();

/* ------- Laddar upp bild från vår hemsida upp till Sirv-servern ---- */
function getImage(token) {
	const uploadImg = document.querySelector('.inputImg'); //Fixa så vi får rätt query
	const uploadCommand = document.querySelector('.newCommand'); //Fixa så vi får rätt query
	const fs = require('fs');

	fs.readFile(uploadImg, (err, fileData) => {
		let options = {
			method: 'POST',
			hostname: 'api.sirv.com',
			port: null,
			path: `/v2/files/upload?filename=%2Fpath%2Fto%2F${uploadCommand}.jpg`,
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		};

		let req = http.request(options, function (res) {
			var chunks = [];

			res.on('data', function (chunk) {
				chunks.push(chunk);
			});

			res.on('end', function () {
				var body = Buffer.concat(chunks);
				console.log(body.toString());
			});
		});

		req.write(fileData);
		req.end();
	});
	console.log(token);
}

//Tar in url samt en text för att då skapa en meme.
//module.exports = async (msg, args) => {
//	msg.channel.send(`https://demo.sirv.com/oman.jpg?text=Overlay text here!`);
//};

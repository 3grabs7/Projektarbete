const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	let args = req.url.split('/').slice(1);
	console.log(args);
	if (args[0] === 'discord%20data') {
		fs.readFile(
			path.join(__dirname, 'public', `${args[1]}.json`),
			(err, content) => {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(content);
			}
		);
		return;
	}
	if (args[0] === 'memebank') {
		fs.readFile(
			path.join(__dirname, 'uploadedimgs', `${args[1]}.jpg`),
			(err, content) => {
				res.writeHead(200, { 'Content-Type': 'image/jpg' });
				res.end(content);
			}
		);
		return;
	}
	res.writeHead(404, 'Du vet vad det betyder');
	res.end();
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

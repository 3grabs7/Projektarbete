const http = require('http');
const path = require('path');
const fs = require('fs');

// vår server
const server = http.createServer((req, res) => {
	// splittar den requestade url precis som med args i commands
	let args = req.url.split('/').slice(1);
	// vi kollar med första args vad för grejer folk vill ha
	// localhost:5000/discord%20data
	if (args[0] === 'discord%20data') {
		fs.readFile(
			// vi letar i vår public folder efter args[1].json
			// localhost:5000/discord%20data/test
			path.join(__dirname, 'public', `${args[1]}.json`),
			(err, content) => {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(content);
			}
		);
		return;
	}
	// nästa för att hämta bilder
	// localhost:5000/memebank
	if (args[0] === 'memebank') {
		fs.readFile(
			// hämtar tex steffo med localhost:5000/memebank/steffo
			path.join(__dirname, 'uploadedimgs', `${args[1]}.jpg`),
			(err, content) => {
				res.writeHead(200, { 'Content-Type': 'image/jpg' });
				res.end(content);
			}
		);
		return;
	}
	// om filepath inte finns får vi nöjet att äntligen vara den som skickar iväg den här vidriga siffran
	res.writeHead(404, 'Du vet vad det betyder');
	res.end();
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

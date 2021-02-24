const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'test.json'), (err, content) => {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(content);
		});
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// /*
//  * -----------------------------
//  * TEST CODE FOR POSTING TO NODE
//  * -----------------------------
//  */
// var http = require('http');
// var qs = require('querystring');
// var serverPort = 8124;
// http
// 	.createServer(function (request, response) {
// 		if (request.method === 'POST') {
// 			console.log(request);
// 		}
// 		response.statusMessage = 'ok';
// 		response.statusCode = 200;
// 		response.end();
// 	})
// 	.listen(serverPort);
// console.log('Server running at localhost:' + serverPort);

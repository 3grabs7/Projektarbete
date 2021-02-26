const http = require('http');
const path = require('path');
const fs = require('fs');

const extensions = {
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.jpg': 'image/jpg',
	'.png': 'image/png',
};

const server = http.createServer((req, res) => {
	let args = req.url.split('/').slice(1);
	let filePath = path.join(__dirname, args[0], `${args[1]}`);
	let extName = path.extname(filePath);

	fs.readFile(filePath, (err, content) => {
		if (err != null) {
			res.writeHead(404, 'Du vet vad det betyder');
			console.log(err);
			res.end(`Cant't find osv : ${err.code}`);
			return;
		}
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': extensions[extName],
		});
		res.end(content);
	});
});

// const server = http.createServer((req, res) => {
// 	let args = req.url.split('/').slice(1);
// 	let dirPath = path.join(__dirname, args[0]);
// 	let dataToSend = { response: [] };

// 	fs.readdir(dirPath, (err, files) => {
// 		if (err != undefined) {
// 			console.log(err);
// 			return;
// 		}
// 		files.forEach((file) => {
// 			let filePath = path.join(__dirname, args[0], file);
// 			let extName = path.extname(filePath);
// 			fs.readFile(filePath, (err, content) => {
// 				if (err != null) {
// 					console.log(`Failed to load image ${img}\nError : ${err}`);
// 					return;
// 				}
// 				if (!args[1]) {
// 					dataToSend.response.push({
// 						url: content,
// 						ext: extName,
// 					});
// 				}
// 			});
// 		});
// 		res.writeHead(200, {
// 			'Access-Control-Allow-Origin': '*',
// 			'Content-Type': 'application/json',
// 		});
// 		res.end(JSON.stringify(dataToSend));
// 	});
// });

// const server = http.createServer((req, res) => {
// 	let args = req.url.split('/').slice(1);
// 	let dirPath = path.join(__dirname, args[0]);

// 	fs.readdir(dirPath, (err, files) => {
// 		if (err != undefined) {
// 			res.writeHead(404, 'Du vet vad det betyder');
// 			res.end(`Cant't find osv : ${err.code}`);
// 			return;
// 		}
// 		let content = { response: [] };
// 		files.forEach((f) => {
// 			if (!args[1]) {
// 				content.response.push({ url: `${dirPath}${f}`, ext: path.extname(f) });
// 			} else {
// 				if (f === args[1]) {
// 					content.response.push({
// 						url: `${dirPath}${f}`,
// 						ext: path.extname(f),
// 					});
// 				}
// 			}
// 		});

// 		console.log(content);

// 		res.writeHead(200, {
// 			'Access-Control-Allow-Origin': '*',
// 			'Content-Type': 'application/json',
// 		});
// 		res.end(JSON.stringify(content));
// 	});
// });

const PORT = process.env.PORT ?? 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

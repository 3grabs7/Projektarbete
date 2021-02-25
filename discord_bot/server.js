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
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

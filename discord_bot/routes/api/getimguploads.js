const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const imgFolder = path.join(__dirname, '../../public/imguploads');

router.get('/', (req, res) => {
	let imgList = { imgs: [] };

	fs.readdirSync(imgFolder).forEach((file) => {
		imgList.imgs.push(file);
	});

	console.log(imgList);
	res.json(imgList);
});

router.get('/:img', (req, res) => {
	if (!fs.existsSync(`${imgFolder}/${req.params.img}`)) {
		res
			.status(400)
			.json({ msg: `${req.params.img} not found in uploaded images` });
		return;
	}
	res.sendFile(`${imgFolder}/${req.params.img}`);
});

module.exports = router;

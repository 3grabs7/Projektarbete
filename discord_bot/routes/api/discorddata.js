const express = require('express');
const router = express.Router();
const discordData = require('../../public/discorddata/data.js');

router.get('/', (req, res) => res.json(discordData));

router.get('/:cat', (req, res) => {
	let found = discordData[req.params.cat];
	if (!found) {
		res
			.status(400)
			.json({ msg: `${req.params.cat} not found in discord data` });
		return;
	}
	res.json(discordData[req.params.cat]);
});

router.get('/users/:id', (req, res) => {
	let found =
		discordData.users.filter((member) => member.id === req.params.id).length >
			0 ||
		discordData.users.filter((member) => member.name === req.params.id).length >
			0;
	if (!found) {
		res
			.status(400)
			.json({ msg: `Id : ${req.params.id} not found in members list` });
		return;
	}
	res.json(
		discordData.users.filter(
			(member) => member.id === req.params.id || member.name === req.params.id
		)
	);
});

module.exports = router;

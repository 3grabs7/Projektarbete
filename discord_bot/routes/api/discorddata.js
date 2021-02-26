const express = require('express');
const router = express.Router();
const discordData = require('../../public/discorddata/data');

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

router.get('/members/:id', (req, res) => {
	let found =
		discordData['members'].filter(
			(member) => member.id === parseInt(req.params.id)
		).length > 0;
	if (!found) {
		res
			.status(400)
			.json({ msg: `Id : ${req.params.id} not found in members list` });
		return;
	}
	res.json(
		discordData['members'].filter(
			(member) => member.id === parseInt(req.params.id)
		)
	);
});

module.exports = router;

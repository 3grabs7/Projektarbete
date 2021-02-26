const express = require('express');
const router = express.Router();
const groups = JSON.parse(localStorage.getItem('groups.json'));

router.post('/', (req, res) => {
	res.send(req.body);
	localStorage.setItem('groups.json', JSON.stringify(req.body));
});
module.exports = router;

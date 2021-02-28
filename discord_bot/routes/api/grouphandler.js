const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	//* How to error handle stringify?!?!
	console.log(req.body);
	localStorage.setItem('groups.json', JSON.stringify(req.body));

	return res
		.status(200)
		.json({ msg: 'Groups uploaded and successfully saved.' });
	//* create event listener that updates bot commands and triggers send when groups gets changed
});
module.exports = router;

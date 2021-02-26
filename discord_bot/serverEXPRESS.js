const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const discordData = require('./public/discorddata/data');

const app = express();

app.use(logger);

app.get('/api/discorddata', (req, res) => res.json(discordData));

app.get('/api/discorddata/:cat/:id', (req, res) => {
	res.json(
		discordData[req.params.cat].filter(
			(member) => member.id === parseInt(req.params.id)
		)
	);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORTEXPRESS || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/imguploads', (req, res) => {
	res.send('Fuck you for now');
});

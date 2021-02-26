const path = require('path');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

app.use(logger);

//* Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/discorddata', require('./routes/api/discorddata'));

const PORT = process.env.PORTEXPRESS || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/imguploads', (req, res) => {
	res.send('Fuck you for now');
});

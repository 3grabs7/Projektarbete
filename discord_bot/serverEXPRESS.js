const path = require('path');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

//* Logger Middleware
app.use(logger);
//* Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Static folder
app.use(express.static(path.join(__dirname, 'public')));

//* Route discord data requests
app.use('/api/discorddata', require('./routes/api/discorddata'));

//* Route img uploads requests
//* ---------

//* Route create groupsrequests
app.use('/api/creategroups', require('./routes/api/creategroups'));

const PORT = process.env.PORTEXPRESS || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/imguploads', (req, res) => {
	res.send('Fuck you for now');
});

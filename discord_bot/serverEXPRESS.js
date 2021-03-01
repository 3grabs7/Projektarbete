const path = require('path');
const logger = require('./middleware/logger');
const corsMiddleware = require('./middleware/cors');
const express = require('express');
const app = express();

//* Logger Middleware
app.use(logger);
//* Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//* Cors middleware
app.use(corsMiddleware);

//* Static folder
app.use(express.static(path.join(__dirname, 'public')));

//* Route discord data requests
app.use('/api/discorddata', require('./routes/api/discorddata'));

//* Route img uploads requests
app.use('/api/imguploads', require('./routes/api/getimguploads'));

//* Route create groupsrequests
app.use('/api/creategroups', require('./routes/api/grouphandler'));

//* Error page trying to access invalid urls
app.use((req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'notfound.html'));
});
const PORT = process.env.PORTEXPRESS || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const moment = require('moment');

module.exports = function (req, res, next) {
	console.log(
		`REQUEST : ${req.protocol}://${req.get('host')}${
			req.originalUrl
		}: ${moment().format()}\nHeaders : ${JSON.stringify(req.headers)}`
	);
	next();
};

module.exports = function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'localhost:4000');
	res.setHeader('Access-Control-Allow-Origin', 'https://3grabs7.github.io');
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	next();
};

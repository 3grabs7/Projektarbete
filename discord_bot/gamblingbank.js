module.exports = () => {
	localStorage.on('gambleBalance', function (value, old, url) {
		console.log(`Value : ${value}\nOld : ${old}\nURL : ${url}`);
	});
	var balances = JSON.parse(localStorage.getItem('gambleBalance'));
	var activeBets = JSON.parse(localStorage.getItem('activeBets'));
	console.log('Bank loaded');
	//console.log(balances);
	//console.log(activeBets);
};

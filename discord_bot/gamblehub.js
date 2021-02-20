module.exports = () => {
	localStorage.on('gambleBalance.json', function (value, old, url) {
		console.log('********** Gamble Balance Updated **********');
		console.log(`Value : ${value}\nOld : ${old}\nURL : ${url}`);
		console.log('********** Gamble Balance End **********');
	});
	localStorage.on('activeBets.json', function (value, old, url) {
		console.log('********** Gamble Bet Updated **********');
		console.log(`Value : ${value}\nOld : ${old}\nURL : ${url}`);
		console.log('********** Gamble Bet End **********');
	});
	console.log('Gamble hub connected');
};

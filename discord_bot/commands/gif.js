const fetch = require('node-fetch');

module.exports = async (msg, args) => {
	let apikey = 'IUK0U580FPAU';
	var search_url = `https://g.tenor.com/v1/search?q=${args[0]}&key=${apikey}&limit=70`;

	let response = await fetch(search_url);
	if (response.status === 200) {
		let json = await response.json();
		let results = json.results
			.map((r) => r.media)
			.map((a) => a[0])
			.map((g) => g.gif.url);

		let index = 0;
		if (args[1] != undefined) {
			if (args[1] - 1 >= 0 && args[1] <= results.length) {
				index = args[1] - 1;
			} else {
				index = 0;
			}
		} else {
			index = Math.floor(Math.random() * results.length);
		}
		let randomGif = results[index];
		msg.channel.send(randomGif);
	}
};

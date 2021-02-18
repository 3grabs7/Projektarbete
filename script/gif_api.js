async function getGif(search_term) {
	// set the apikey and limit
	let apikey = 'IUK0U580FPAU';
	// using default locale of en_US
	try {
		var search_url = `https://g.tenor.com/v1/search?q=${search_term}&key=${apikey}&limit=70`;
		let response = await fetch(search_url);
		if (response.ok) {
			let json = await response.json();
			console.log(response);

			let array = json.results
				.map((r) => r.media)
				.map((a) => a[0])
				.map((g) => g.gif.url);
			return array;
		}
		console.log(response.status);
	} catch {
		console.log('nopp');
	}
}

async function fetchGifs(search_term) {
	let userInput = document.querySelector('.search');
	var search_term = userInput.value;
	let apikey = 'IUK0U580FPAU';
	try {
		var search_url = `https://g.tenor.com/v1/search?q=${search_term}&key=${apikey}&limit=70`;
		let response = await fetch(search_url);
		if (response.ok) {
			let json = await response.json();
			let gifs = json.results
				.map((r) => r.media)
				.map((a) => a[0])
				.map((g) => g.gif.url);
			loadGifsToPage(gifs);
		}
	} catch {
		console.log(`Server responded with error : ${response.status}`);
	}
}

async function loadGifsToPage(gifs) {
	let main = document.querySelector('.maincontainer__results');
	gifs.forEach((e, i) => {
		let box = document.createElement('div');
		box.className = 'maincontainer__results__item';

		let img = document.createElement('img');
		img.src = e;
		box.append(img);

		let number = document.createElement('h1');
		number.innerHTML = i + 1;
		box.append(number);

		main.append(box);
	});
}

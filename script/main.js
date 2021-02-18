// Show memes on page loaded
document.addEventListener('DOMContentLoaded', () => {
	memeFetch();
});
// Event listener for meme button
document.querySelector('#memebutton').addEventListener('click', () => {
	clearContainer();
	memeFetch();
});
// Event listener for gif search button
document.querySelector('.submit').addEventListener('click', async () => {
	clearContainer();
	let userInput = document.querySelector('.search');
	var search_term = userInput.value;
	let gifs = await getGif(search_term);
	let main = document.querySelector('.container');
	gifs.forEach((e, i) => {
		let box = document.createElement('div');
		box.className = 'item';

		let img = document.createElement('img');
		img.src = e;
		box.append(img);

		let number = document.createElement('h1');
		number.innerHTML = i + 1;
		box.append(number);

		main.append(box);
	});
});
// If enter -> submit
document.querySelector('#search').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		document.querySelector('.submit').click();
	}
});

function clearContainer() {
	Array.from(document.querySelector('.container').childNodes).forEach((e) =>
		e.remove()
	);
}

document.querySelector('#server').addEventListener('click', async () => {
	let post = await fetch('http://localhost:8124/', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ test: 'några grejer', test2: 'flera grejer' }),
	});
	console.log(post);
});

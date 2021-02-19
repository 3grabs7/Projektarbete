//* Page load
document.addEventListener('DOMContentLoaded', () => {
	fetchMemes();
});

document.querySelector('#memebutton').addEventListener('click', fetchMemes);

document.querySelector('.submit').addEventListener('click', fetchGifs);
// If enter -> submit
document.querySelector('#search').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		document.querySelector('.submit').click();
	}
});

function clearContainer() {
	Array.from(
		document.querySelector('.maincontainer__results').childNodes
	).forEach((e) => e.remove());
}
/*
 * -----------------------------
 * TEST CODE FOR POSTING TO NODE *
 * -----------------------------
 */
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

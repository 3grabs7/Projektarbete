//* Page load
document.addEventListener('DOMContentLoaded', () => {
	fetchMemes();
});

document.querySelector('#memebutton').addEventListener('click', fetchMemes);

document.querySelector('.submit').addEventListener('click', fetchGifs);
document.querySelector('#search').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		document.querySelector('.submit').click();
	}
});

document.querySelector('#inputtext').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		addTextToCanvas();
	}
});

function clearContainer() {
	Array.from(
		document.querySelector('.maincontainer__results').childNodes
	).forEach((e) => e.remove());
}

document.addEventListener('DOMContentLoaded', () => {
	clearContainer();
	fetchMemes();
});

document.querySelector('#memebutton').addEventListener('click', () => {
	clearContainer();
	fetchMemes();
});

document.querySelector('.submit').addEventListener('click', () => {
	clearContainer();
	fetchGifs();
});
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

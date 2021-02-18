document.querySelector('#openeditor').addEventListener('click', (e) => {
	let editor = document.querySelector('.editor');
	if (editor.style.display === 'flex') {
		editor.style.display = 'none';
	} else {
		editor.style.display = 'flex';
	}
});

document.querySelector('#openeditor').addEventListener('click', (e) => {
	let editor = document.querySelector('.editor');
	let arrow = document.querySelector('.file-upload');
	if (editor.style.display === 'flex') {
		editor.style.display = 'none';
		arrow.style.transform = 'rotate(180deg)';
	} else {
		editor.style.display = 'flex';
		arrow.style.transform = 'rotate(0deg)';
	}
});

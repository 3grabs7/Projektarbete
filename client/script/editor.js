let currentImg = '';

//* Open Editor
document.querySelector('#openeditor').addEventListener('click', (e) => {
	let editor = document.querySelector('.editor');
	let arrow = document.querySelector('.arrowcontainer__icon');
	if (editor.style.display === 'flex') {
		editor.style.display = 'none';
		arrow.style.transform = 'rotate(180deg)';
	} else {
		editor.style.display = 'flex';
		arrow.style.transform = 'rotate(0deg)';
	}
});

//* ADD IMG
document.getElementById('addimg').addEventListener('click', () => {
	var input = document.getElementById('inputimg');
	if (input && document.createEvent) {
		var event = document.createEvent('MouseEvents');
		event.initEvent('click', true, false);
		input.dispatchEvent(event);
	}
});

//* Draw img to canvas
document.getElementById('inputimg').addEventListener(
	'change',
	(e) => {
		const canvas = document.querySelector('.editor__container__canvas');
		canvas.width = document.body.clientWidth * 0.85 * 0.9; /// use integer values
		canvas.height = document.body.clientHeight * 0.95 * 0.9;
		ctx = canvas.getContext('2d');
		img = new Image();
		currentImg = URL.createObjectURL(e.target.files[0]);
		img.src = currentImg;
		img.onload = function () {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		};
	},
	false
);

//* SAVE IMG
document.getElementById('saveimg').addEventListener('click', () => {
	const canvas = document.querySelector('.editor__container__canvas');
	var image = canvas
		.toDataURL('image/png')
		.replace('image/png', 'image/octet-stream');

	window.location.href = image;
});

//* RESET IMG
document.getElementById('resetimg').addEventListener('click', () => {
	const canvas = document.querySelector('.editor__container__canvas');
	canvas.width = document.body.clientWidth * 0.85 * 0.9; /// use integer values
	canvas.height = document.body.clientHeight * 0.95 * 0.9;
	ctx = canvas.getContext('2d');
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
});

//* ADD TEXT
document.querySelector('#inputtext').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		addTextToCanvas();
	}
});
function addTextToCanvas() {
	const inputText = document.getElementById('inputtext').value;
	const canvas = document.querySelector('.editor__container__canvas');
	canvas.width = document.body.clientWidth * 0.85 * 0.9; /// use integer values
	canvas.height = document.body.clientHeight * 0.95 * 0.9;
	let ctx = canvas.getContext('2d');
	img = new Image();
	img.onload = function () {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		ctx.font = '40pt Calibri';
		ctx.fillText(inputText, 200, 2000);
	};
	img.src = currentImg;
}

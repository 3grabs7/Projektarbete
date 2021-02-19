// Open Editor
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

document
	.getElementById('addimg')
	.addEventListener('click', () => inputClick('inputimg'));

document.getElementById('saveimg').addEventListener('click', saveImg);

document.getElementById('resetimg').addEventListener('click', resetImg);

function inputClick(clickId) {
	var ele = document.getElementById(clickId);
	if (ele && document.createEvent) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, false);
		ele.dispatchEvent(evt);
	}
}

document.getElementById('inputimg').addEventListener(
	'change',
	(e) => {
		const canvas = document.querySelector('.editor__container__canvas');
		canvas.width = document.body.clientWidth * 0.85 * 0.9; /// use integer values
		canvas.height = document.body.clientHeight * 0.95 * 0.9;
		ctx = canvas.getContext('2d');
		img = new Image();
		img.src = URL.createObjectURL(e.target.files[0]);
		img.onload = function () {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		};
	},
	false
);

function addImg() {}

function saveImg() {}
function resetImg() {}

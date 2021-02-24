/*
 * -----------------------------
 * TEST CODE FOR POSTING TO NODE *
 * -----------------------------
 */
document.querySelector('#server').addEventListener('click', async () => {
	let response = await fetch('http://localhost:5000/uploadedimgs/123.jpg');
	let img = document.createElement('img');
	img.src = response.url;
	document.body.append(img);
});

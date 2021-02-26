document.querySelector('#server').addEventListener('click', async () => {
	let response = await fetch('http://localhost:5000/imguploads/123.jpg');
	let img = document.createElement('img');
	img.src = response.url;
	document.body.append(img);

	let response2 = await fetch('http://localhost:5000/discorddata/data.json');
	let json = await response2.json();
	let p = document.createElement('p');
	p.innerText = JSON.stringify(json);
	document.body.append(p);
});

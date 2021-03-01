document.querySelector('#server').addEventListener('click', async () => {
	let response = await fetch('http://localhost:4000/imguploads/', {
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'applications/json',
		},
	}).then((data) => {
		console.log(data);
	});

	let json = await response.json();
	console.log(response.json());

	json.imgs.forEach(async (imgPath) => {
		let response = await fetch(`http://localhost:4000/imguploads/${imgPath}`);
		let img = document.createElement('img');
		img.src = response.url;
		document.body.append(img);
	});

	//* Test to get data from a json
	//* Probably won't be used until we dynamically can update data through discord bot
	let response2 = await fetch('http://localhost:5000/discorddata/data.json');
	let json2 = await response2.json();
	let p = document.createElement('p');
	p.innerText = JSON.stringify(json);
	document.body.append(p);
});

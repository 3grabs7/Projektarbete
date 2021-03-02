async function getImgFromNode() {
	let response = await fetch('http://localhost:4000/api/imguploads/');
	let json = await response.json();
	console.log(json);

	let main = document.querySelector('.maincontainer__results');
	json.imgs.forEach(async (imgPath) => {
		let box = document.createElement('div');
		box.className = 'maincontainer__results__item';

		let img = document.createElement('img');
		img.src = `http://localhost:4000/imguploads/${imgPath}`;
		box.append(img);

		let name = document.createElement('h1');
		name.innerHTML = imgPath.split('.')[0];
		box.append(name);

		main.append(box);
	});

	//* Test to get data from a json
	//* Probably won't be used until we dynamically can update data through discord bot
	// let response2 = await fetch('http://localhost:5000/discorddata/data.json');
	// let json2 = await response2.json();
	// let p = document.createElement('p');
	// p.innerText = JSON.stringify(json);
	// document.body.append(p);
}

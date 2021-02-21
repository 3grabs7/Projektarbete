const fetch = require('node-fetch');

module.exports = async (msg, args) => {
	let memes = [];
	let response = await fetch(`https://api.imgflip.com/get_memes`);

	if (response.status === 200) {
		let json = await response.json();
		Array.from(json.data.memes).forEach((e, i) => {
			let cmd = e.name.replace(' ', '').slice(0, 3);
			memes.push({
				name: e.name,
				cmd: memes.filter((m) => m.cmd === cmd).length > 0 ? `${cmd}${i}` : cmd,
				url: e.url,
				id: e.id,
			});
		});

		let meme = await addTextToMeme(memes, args);
		if (meme.length === 0) {
			console.log('Invalid meme code entered');
			return;
		}
		msg.channel.send(meme);
		return;
	}
	console.log(`Server responded with error : ${response.statusText}`);
};

async function addTextToMeme(memes, args) {
	let urlRoot = 'https://api.imgflip.com/caption_image?';
	let cred = 'username=chrisgrabs&password=bjorn1337';
	let id = memes.filter((m) => m.cmd === args[0]).map((m) => m.id);

	for (let i = 1; i < args.length; i++) {
		args[i] = args[i].split('-').join(' ');
	}

	let query = `&template_id=${id}&text0=${args[1] ?? ''}&text1=${
		args[2] ?? ''
	}`;

	let response = await fetch(`${urlRoot}${cred}${query}`);
	if (response.status === 200) {
		let json = await response.json();
		if (json.success) {
			return json.data.url;
		}
		return memes.filter((m) => m.cmd === args[0]).map((m) => m.url);
	}
	console.log(`Server responded with error : ${response.statusText}`);
}

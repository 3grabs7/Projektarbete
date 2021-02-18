// Tar in url samt en text för att då skapa en meme.
async function createMeme(msg, args) {
	var CreateMemeImg = `https://textoverimage.moesif.com/image?image_url=${args[0]}&text=${args[1]}`;
	let response = await fetch(CreateMemeImg);
	console.log(response);

	msg.channel.send({
		files: [
			{
				attachment: CreateMemeImg,
			},
		],
	});
}

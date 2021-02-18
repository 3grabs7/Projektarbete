// Tar in url samt en text för att då skapa en meme.
async function editImg(url, text) {
  var CreateMemeImg = `https://textoverimage.moesif.com/image?image_url=${url}&text=${text}`;
  let response = await fetch(CreateMemeImg);
  console.log(response);
}

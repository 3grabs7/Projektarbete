const lookMemes = document.querySelector(".buttonOne");

lookMemes.addEventListener("click", () => {
  return gifFetch();
});

function gifFetch() {
  // http://alpha-meme-maker.herokuapp.com/:page

  fetch(`https://api.imgflip.com/get_memes`) //Fetchar URL för nå API:n
    .then((r) => r.json()) //slänger in det i JSON format + inväntar så det laddas klart.
    .then((data) => {
      console.log(data);
    });
}

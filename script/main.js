const lookMemes = document.querySelector(".buttonOne");

lookMemes.addEventListener("click", () => {
  return gifFetch();
});

async function gifFetch() {
  // http://alpha-meme-maker.herokuapp.com/:page
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();
<<<<<<< HEAD

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name ?? 'unknown',
      cmd: memes.includes({cmd:cmd}) ? `${cmd}${i}` : cmd,
=======
  Array.from(json.data.memes).forEach((e) => {
    memes.push({
      name: e.name,
      cmd: e.name.replace(" ", "").slice(0, 3),
>>>>>>> f20e2118554ef89822366f96b3890bd42f1e26d5
      url: e.url,
    });
  });
  console.log(memes);
  loadPage(memes);
}

function loadPage(memes) {
<<<<<<< HEAD
  memes.forEach(m=> {
    let item = document.createElement('div');

    let img = document.createElement('img');
    img.src = m.url;
    item.append(img);

    let name = document.createElement('h1');
    name.innerHTML = m.name;
    item.append(name);

    let cmd = document.createElement('p');
    cmd.innerHTML = m.cmd;
    item.append(cmd);
    document.body.append(item);
  })
}
=======
  memes.forEach((m) => {
    let item = document.createElement("div");

    let img = document.createElement("img");
    img.src = m.url;
    item.append(img);

    let name = document.createElement("h1");
    name.innerHTML = memes.name;
    item.append(name);

    let cmd = document.createElement("p");
    cmd.innerHTML = m.cmd;
    item.append(cmd);
  });
}

// /
// function gifFetch() {
//   // http://alpha-meme-maker.herokuapp.com/:page

//   fetch(`https://api.imgflip.com/get_memes`) //Fetchar URL för nå API:n
//     .then((r) => r.json()) //slänger in det i JSON format + inväntar så det laddas klart.
//     .then((data) => {
//       console.log(data);
//       let title = document.querySelector(".title");

//       i = 0;
//       for (i == 0; i < 20; i++) {
//         let name = data.data.memes[i].name;
//         let urlMeme = data.data.memes[i].url;
//         title.innerHTML = name;
//         cr
//         document.querySelector("img").src = urlMeme;
//         console.log(name + urlMeme);
//       }
//     });
// }
>>>>>>> f20e2118554ef89822366f96b3890bd42f1e26d5

const lookMemes = document.querySelector(".buttonOne");

lookMemes.addEventListener("click", () => {
  return gifFetch();
});

async function gifFetch() {
  // http://alpha-meme-maker.herokuapp.com/:page
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name ?? 'unknown',
      cmd: memes.includes({cmd:cmd}) ? `${cmd}${i}` : cmd,
      url: e.url,
    });
  });
  console.log(memes);
  loadPage(memes);
}

function loadPage(memes) {
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
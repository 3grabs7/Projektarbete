const lookMemes = document.querySelector(".buttonOne");
gifFetch();

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
  loadPage(memes);
}

function loadPage(memes) {
  let boxes = document.querySelectorAll('.item');

  Array.from(boxes).forEach((e, i) => {
    let img = document.createElement('img');
    img.src = memes[i].url;
    e.append(img);

    let hr = document.createElement('hr');
    e.append(hr);

    let name = document.createElement('h1');
    name.innerHTML = memes[i].name;
    e.append(name);

    let cmd = document.createElement('p');
    cmd.innerHTML = `Command : <b>${memes[i].cmd}</b>`;
    e.append(cmd);
    
  })
}

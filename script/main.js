const lookMemes = document.querySelector(".buttonOne");

lookMemes.addEventListener("click", () => {
  clearContainer();
  gifFetch();
});

async function gifFetch() {
  // http://alpha-meme-maker.herokuapp.com/:page
  let memes = [];
  let response = await fetch(`https://api.imgflip.com/get_memes`);
  let json = await response.json();

  Array.from(json.data.memes).forEach((e, i) => {
    let cmd = e.name.replace(" ", "").slice(0, 3);
    memes.push({
      name: e.name ?? "unknown",
      cmd: memes.includes({ cmd: cmd }) ? `${cmd}${i}` : cmd,
      url: e.url,
    });
  });
  loadPage(memes);
}

function loadPage(memes) {
  let main = document.querySelector(".container");

  memes.forEach((e) => {
    let box = document.createElement("div");
    box.className = "item";

    let img = document.createElement("img");
    img.src = e.url;
    box.append(img);

    let hr = document.createElement("hr");
    box.append(hr);

    let name = document.createElement("h1");
    name.innerHTML = e.name;
    box.append(name);

    let cmd = document.createElement("p");
    cmd.innerHTML = `Command : <b>${e.cmd}</b>`;
    box.append(cmd);

    main.append(box);
  });
}


async function grab_data(search_term) {
  // set the apikey and limit
  let apikey = "IUK0U580FPAU";
  // using default locale of en_US
  var search_url = `https://g.tenor.com/v1/search?q=${search_term}&key=${apikey}&limit=10`

  let response = await fetch(search_url);
  let json = await response.json();

  let array = json.results.map(r => r.media).map(a=>a[0]).map(g=>g.gif.url);
  console.log(array);
  return array;
}

const gifBtn = document.querySelector(".submit");
gifBtn.addEventListener("click", async () => { 
  clearContainer();
  let userInput = document.querySelector(".search");
  var search_term = userInput.value;
  let gifs = await grab_data(search_term);
  console.log(gifs);
  let main = document.querySelector(".container");
  gifs.forEach(e => {
    let box = document.createElement("div");
    box.className = "item";

    let img = document.createElement("img");
    img.src = e;
    box.append(img);

    main.append(box);
  })
});

function clearContainer() {
  Array.from(
    document.querySelector(".container").childNodes
  ).forEach((e) => e.remove());
}
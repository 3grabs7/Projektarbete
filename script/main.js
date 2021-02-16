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
//  ------------------------- GIF API --------------
function httpGetAsync(theUrl, callback) {
  // create the request object
  let xmlHttp = new XMLHttpRequest();

  // set the state change callback to capture when the response comes in
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  };

  // open as a GET call, pass in the url and set async = True
  xmlHttp.open("GET", theUrl, true);

  // call send with no params as they were passed in on the url string
  xmlHttp.send(null);

  return;
}
function tenorCallback_search(responsetext) {
  // parse the json response
  let response_objects = JSON.parse(responsetext);

  top_10_gifs = response_objects["results"];

  // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

  document.getElementById("preview_gif").src =
    top_10_gifs[0]["media"][0]["nanogif"]["url"];

  document.getElementById("share_gif").src =
    top_10_gifs[0]["media"][0]["tinygif"]["url"];

  return;
}

// 	IUK0U580FPAU -- key

function grab_data() {
  // set the apikey and limit
  let apikey = "IUK0U580FPAU";
  let lmt = 8;
  let userInput = document.querySelector(".search");

  // test search term
  var search_term = userInput.value;

  // using default locale of en_US
  var search_url =
    "https://g.tenor.com/v1/search?q=" +
    search_term +
    "&key=" +
    apikey +
    "&limit=" +
    lmt;

  httpGetAsync(search_url, tenorCallback_search);

  // data will be loaded by each call's callback
  return;
}

const gifBtn = document.querySelector(".submit");

gifBtn.addEventListener("click", () => {
  grab_data();
});

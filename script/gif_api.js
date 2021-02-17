async function getGif(search_term) {
  // set the apikey and limit
  let apikey = "IUK0U580FPAU";
  // using default locale of en_US
  var search_url = `https://g.tenor.com/v1/search?q=${search_term}&key=${apikey}&limit=10`;

  let response = await fetch(search_url);
  let json = await response.json();

  let array = json.results
    .map((r) => r.media)
    .map((a) => a[0])
    .map((g) => g.gif.url);
  console.log(array);
  return array;
}

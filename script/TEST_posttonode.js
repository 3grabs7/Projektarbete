/*
 * -----------------------------
 * TEST CODE FOR POSTING TO NODE *
 * -----------------------------
 */
document.querySelector('#server').addEventListener('click', async () => {
	let post = await fetch('http://localhost:8124/', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ test: 'några grejer', test2: 'flera grejer' }),
	});
	console.log(post);
});

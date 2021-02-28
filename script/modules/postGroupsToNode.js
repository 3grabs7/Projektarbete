import fetch from 'node-fetch';

export async function postGroups(data) {
	url = 'http://localhost:4000/api/creategroups';
	options = {
		method: 'POST',
		headers: { 'content-type': 'application/json}' },
		body: JSON.stringify(data),
	};
	const response = await fetch(url, options).then((data) => console.log(data));
	return response;
}

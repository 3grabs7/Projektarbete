document.getElementById('creategroupsbutton').addEventListener('click', (e) => {
	let createGroups = document.querySelector('.hero__creategroups');
	if (createGroups.style.display === 'flex') {
		createGroups.style.display = 'none';
	} else {
		createGroups.style.display = 'flex';
	}
});

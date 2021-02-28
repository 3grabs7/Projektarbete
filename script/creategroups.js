//* Hide/Show Create Groups
document.getElementById('creategroupsbutton').addEventListener('click', (e) => {
	let createGroups = document.querySelector('.hero__creategroups');
	if (createGroups.style.display === 'flex') {
		createGroups.style.display = 'none';
	} else {
		createGroups.style.display = 'flex';
	}
});

//* Add/Remove Groups when value's set
document.getElementById('groupsamt').addEventListener('change', (e) => {
	let mainContainer = document.querySelector('.hero__creategroups__forms');
	let awaitedGroupsCount = document.getElementById('groupsamt').value;
	let currentGroupsCount = document.querySelectorAll(
		'.hero__creategroups__forms__group'
	).length;
	let membersCount = document.getElementById('membersamt').value;

	if (awaitedGroupsCount > currentGroupsCount) {
		let newGroupsCount = awaitedGroupsCount - currentGroupsCount;
		for (let i = 1; i <= newGroupsCount; i++) {
			let container = document.createElement('div');
			container.className = 'hero__creategroups__forms__group';

			let head = document.createElement('h1');
			head.innerText = `Group ${currentGroupsCount + i}`;
			container.appendChild(head);

			for (let j = 0; j < membersCount; j++) {
				let input = document.createElement('input');
				input.type = 'text';
				container.appendChild(input);
			}
			mainContainer.appendChild(container);
		}
		return;
	}

	let groupElements = document.querySelectorAll(
		'.hero__creategroups__forms__group'
	);

	Array.from(groupElements).forEach((element, i) => {
		if (i + 1 > awaitedGroupsCount) {
			element.parentNode.removeChild(element);
		}
	});
});

//* Add/remove number of group members
document.getElementById('membersamt').addEventListener('change', (e) => {
	let groups = document.querySelectorAll('.hero__creategroups__forms__group');
	let awaitedMembersCount = document.getElementById('membersamt').value;
	let currentMembersCount =
		document.querySelectorAll('.hero__creategroups__forms__group input')
			.length / groups.length;

	let newMembersCount = awaitedMembersCount - currentMembersCount;
	Array.from(groups).forEach((group) => {
		if (awaitedMembersCount > currentMembersCount) {
			for (let i = 0; i < newMembersCount; i++) {
				let input = document.createElement('input');
				input.type = 'text';
				group.appendChild(input);
			}
		} else {
			for (let i = 0; i < Math.abs(newMembersCount); i++) {
				group.removeChild(group.lastChild);
			}
		}
	});
});

//* Submit groups to server
document.getElementById('submitgroups').addEventListener('click', (e) => {
	let inputCollection = document.querySelectorAll(
		'.hero__creategroups__forms__group'
	);
	let json = inputToJson(inputCollection);
	postGroups(json);
});

function inputToJson(obj) {
	let jsonTemplate = { groups: [] };
	Array.from(obj).forEach((element) => {
		let group = { groupId: 0, members: [] };
		Array.from(element.querySelectorAll('*')).forEach((tag, i) => {
			if (i === 0) {
				group.groupId = tag.innerText.split(' ')[1];
			} else {
				group.members.push(tag.value);
			}
		});
		jsonTemplate.groups.push(group);
	});
	return jsonTemplate;
}
async function postGroups(data) {
	let url = 'http://localhost:4000/api/creategroups';
	let options = {
		method: 'POST',
		mode: 'no-cors',
		headers: { 'content-type': 'application/json}' },
		body: JSON.stringify(data),
	};

	const response = await fetch(url, options);

	if (response.ok) {
		const json = response.json();
		console.log(json.msg);
	}
}

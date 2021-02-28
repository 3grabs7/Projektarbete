export function inputToJson(obj) {
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

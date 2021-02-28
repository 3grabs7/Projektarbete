const userIds = JSON.parse(localStorage.getItem('userids.json')).users.map(
	(user) => user.id
);

module.exports = function (client) {
	client.on('message', (msg) => {
		const { author } = msg;
	});
};

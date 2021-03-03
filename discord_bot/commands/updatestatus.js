module.exports = function (msg, args, client) {
	client.user.setPresence({
		activity: {
			name: args[0].replace(/[-]/g, ' '),
			type: 0,
		},
	});
};

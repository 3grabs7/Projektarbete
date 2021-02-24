module.exports = function (msg, args) {
	msg.reply(
		`https://abinkpoo.sirv.com/path/to/${args[0]}.jpg?text=${args[1]}&text.color=FFFFFF&text.font.weight=extra-bold&text.font.size=28&text.position.gravity=center&text.position.y=50`
	);
};

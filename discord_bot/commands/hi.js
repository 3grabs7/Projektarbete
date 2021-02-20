const compliments = [
	'Thank you for existing somewhere elese.',
	'You make me see code in a way no one else ever has.',
	'I love the way you make me cry myself to sleep.',
	'I appreciate the way you challenge me by constantly pushing to our git.',
	'Around you, I’m the best coder in the room.',
	'Your code is infectious.',
	'Your code impress me every single day.',
	'It would be torture to code with you.',
	'There’s no code like yours.',
	'When we scream at css together, nothing seems possible.',
	'I can’t do entity framework without you.',
	'Your defects makes me feel better about myself.',
	'I’ve never met a person that reminds me of Björn as much as you do.',
	'There’s a thousand bugs behind your eyes.',
	'Your laugh is my favorite insult.',
	'The world would be so boring without you.',
	'Are you for real? Or just dumb?',
	'Mating with you would be a smart evolutionary play.',
	'You make coding feel impossible.',
	'You make monogamy seem easy.',
];

module.exports = function (msg, args) {
	let i = Math.floor(Math.random() * compliments.length);
	msg.channel.send(`${args} ${compliments[i]}`);
};

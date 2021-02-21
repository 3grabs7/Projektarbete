const eventEmitter = require('events');

class GambleBalanceManager extends eventEmitter {
	constructor(user, balance) {
		super();
		this.user = user;
		this.balance = balance;
	}
	update(outcome, amt) {
		if (outcome === 'win') {
			this.balance += amt;
		}
		if (outcome === 'loss') {
			this.balance -= amt;
		}
		this.emit('update', this.user, this.balance);
	}
}

module.exports = GambleBalanceManager;

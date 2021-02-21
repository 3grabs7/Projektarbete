const eventEmitter = require('events');
class Emitter extends eventEmitter {}

const emitter = new Emitter();

emitter.on('event', () => console.log('Event fired'));

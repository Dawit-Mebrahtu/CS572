const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
    }
}

const gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out'));

setInterval(() => gym.emit('boom'), 1000);



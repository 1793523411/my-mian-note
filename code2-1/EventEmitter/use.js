var events = require('events');
const { fchown } = require('fs');

var eventEmitter = new events.EventEmitter()
eventEmitter.on('say', function (name) {
    console.log('Hello', name)
})

function hello1(name) {
    console.log('hello 1', name)
}

function hello2(name) {
    console.log('hello 2', name)
}

eventEmitter.addListener('say', hello1)
eventEmitter.addListener('say', hello2)

setTimeout(() => {
    eventEmitter.emit('say', 'Join')
}, 1000);
eventEmitter.removeListener('say', hello1);
eventEmitter.emit('say', 'John');

eventEmitter.removeAllListeners('say')
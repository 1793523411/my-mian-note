const events = require('events')

const emmiter = new events.EventEmitter()
function hello(name) {
    console.log('hello', name)
}

emmiter.on('say',hello)
emmiter.emit('say',"111")
emmiter.emit('say',"222")
emmiter.emit('say',"333")

emmiter.once('see',hello)
emmiter.emit('see',"444")
emmiter.emit('see',"555")
function EventEmitter() {
    this.__events = {}
}

EventEmitter.VERSON = '1.0.0'

EventEmitter.prototype.on = function (eventName, listener) {
    if (!eventName || !listener) return;
    if (!isValidListener(listener)) {
        throw new TypeError('liten mush be a function')
    }
    var events = this.__events;
    var listeners = events[eventName] = events[eventName] || []
    var listenerIWrapper = typeof listener === 'object';
    if (indexOf(listeners, listener) === -1) {
        listeners.push(listenerIWrapper
            ? listener
            : {
                listener: listener,
                once: false
            })
    }
    return this
}

function isValidListener(listener) {
    if (typeof listener === "function") return true;
    else if (listener && typeof listener === "object") return isValidListener(listener.listener);
    else return false
}

function indexOf() {
    var result = -1;
    item = typeof item === 'object' ? item.listener : item;
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i].listener === item) {
            result = i;
            break;
        }
    }
    return result
}

EventEmitter.prototype.emit = function (eventName, args) {
    let listeners = this.__events[eventName];
    if (!listeners) return
    for (let i = 0; i < listeners.length; i++) {
        let listener = listeners[i];
        if (listener) {
            listener.listener.apply(this, args || [])
            if (listener.once) {
                this.off(eventName, listener.listener)
            }
        }
    }
}

EventEmitter.prototype.off = function (eventName, listener) {
    let listeners = this.__events[eventName];
    if (!listener) return;
    let index;
    for (let i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i] && listeners[i].listener === listener) {
            index = i;
            break;
        }
    }
    if (typeof index !== 'undefined') {
        listeners.splice(index, 1, null)
    }
}

EventEmitter.prototype.once = function (eventName, listener) {
    return this.on(eventName, {
        listener: listener,
        once: true
    })
}

EventEmitter.prototype.allOff = function (eventName) {
    if (eventName && this.__events[eventName]) {
        this.__events[eventName] = []
    } else {
        this.__events = {}
    }
}
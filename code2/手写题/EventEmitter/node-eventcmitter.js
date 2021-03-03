function EventEmitter() {
    this.events = new Map()
}

const WrapCallback = (fn, once = false) => ({ callback: fn, once });

EventEmitter.prototype.addListener = function (type, fn, once = false) {
    let handler = this.events.get(type);
    if (!handler) {
        this.events.set(type, WrapCallback(fn, once));
    } else if (handler && typeof handler.callback == 'function') {
        this.events.set(type, [handler, WrapCallback(fn, once)])
    } else {
        handler.push(WrapCallback(fn, once))
    }
}

EventEmitter.prototype.removeListener = function (type, listener) {
    let handler = this.events.get(type);
    if (!handler) return;
    if (!Array.isArray(handler)) {
        if (handler.callback === listener.callback) this.events.delete(type)
        else return
    }
    for (let i = 0; i < handler.length; i++) {
        let item = handler[i];
        if (item.callback === listener.callback) {
            handler.splice(i, 1);
            i--;
            if (handler.length === 1) {
                this.events.set(type, handler[0])
            }
        }
    }
}

EventEmitter.prototype.once = function (type, fn) {
    this.addListener(type, fn, true);
}

EventEmitter.prototype.emit = function (typem, ...args) {
    let handler = this.events.get(type);
    if (!handler) return;
    if (Array.isArray(handler)) {
        handler.map(item => {
            item.callback.apply(this, args);
            if (item.once) this.removeListener(type, item)
        })
    } else {
        handler.callback.apply(this, args)
    }
    return true
}

EventEmitter.prototype.removeAllListener = function (type) {
    let handler = this.events.get(type);
    if (!handler) return;
    else this.events.delete(type)
}
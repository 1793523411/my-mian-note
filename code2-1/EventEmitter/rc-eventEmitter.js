class MyEventEmitter {
    constructor() {
        this.__eventMap = {};
    }

    on(type, handler) {
        if (!(handle instanceof Function)) {
            throw TypeError("must be a function")
        }
        if (!this.__eventMap[type]) {
            this.__eventMap[type] = []
        }
        this.__eventMap[type].push(handler)
    }

    emit(params) {
        if (this.__eventMap[type]) {
            this.__eventMap[type].forEach((handler, index) => {
                handler(params)
            })
        }
    }

    off(type, handler) {
        if (this.__eventMap[type]) {
            this.__eventMap[type].splice(this.__eventMap[type].indexof(handler) >>> 0, 1)
        }
    }


}
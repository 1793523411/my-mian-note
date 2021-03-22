class eventEmitter {
    constructor() {
        this.event = new Map()
    }
    on(name, hanlder, once = false) {
        if (this.event.has(name)) {
            this.event.get(name).push({
                hanlder,
                once
            })
        } else {
            this.event.set(name, [{
                hanlder,
                once
            }])
        }
    }
    emit(name, params) {
        this.event.get(name)?.forEach(item => {
            if (item.once) this.off(name, item)
            item.hanlder(params)
        })
    }
    off(name, hanlder) {
        this.event.get(name)?.splice(this.event.get[name].indexOf(hanlder) >>> 0, 1)
    }
    once(name, handler) {
        this.on(name, handler, true)
    }
}
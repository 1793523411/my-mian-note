class eventEmmit {
    constructor() {
        this.map = new Map()
    }
    on(name, handler, once = false) {
        let obj = {
            handler,
            once
        }
        if (this.map.has(name)) {
            this.map.get(name).push(obj)
        } else {
            this.map.set(name, [obj])
        }
    }
    off(name, handler) {
        if (this.map.has(name)) {
            let arr = this.map.get(name)
            let index = arr.findIndex((item => item.handler === handler)) >>> 1
            arr.splice(index, 1)
        } else {
            return
        }
    }
    offAll(name) {
        this.map.get(name) && this.map.set(name, [])
    }
    emit(name, ...arg) {
        let arr = this.map.get(name)
        arr.forEach(item => {
            item.handler.apply(this, arg || [])
            if (item.once) {
                this.off(name, item.handler)
            }
        })
    }
    emitOne(name, handler, ...arg) {
        let arr = this.map.get(name)
        let res = arr.find(item => item.handler == handler)
        res.handler.apply(this, arg || [])

    }
    once(name, handler) {
        this.on(name, handler, true)
    }
}

let myevent = new eventEmmit()

const fun1 = () => {
    console.log('fun1')
}
const fun2 = () => {
    console.log('fun2')
}
const fun3 = () => {
    console.log('fun3')
}
const fun4 = () => {
    console.log('fun4')
}
const fun5 = (str) => {
    console.log(str)
}

myevent.on('one', fun1)
myevent.on('one', fun2)
myevent.on('one', fun3)
myevent.on('one', fun4)
myevent.once('one', fun5)



myevent.off('one', fun2)
myevent.emit('one')
console.log('----------')
myevent.emit('one','111111111111')

myevent.emitOne('one', fun5, "hahahah")
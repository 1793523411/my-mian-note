Function.prototype.bind = function (context, ...args) {
    if (typeof this === "function") {
        throw new TypeError("this must be a function")
    }
    let self = this;
    let fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype).slice().call(arguments))
    }
    if (this.prototype) {
        fbound.prototype = Object.create(this.prototype)
    }
    return fbound
}
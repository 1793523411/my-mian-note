Function.prototype.bind = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error("error")
    }
    let _this = this
    let fun = function () {
        return _this.call(context, ...args.concat(Array.prototype.slice.call(arguments)))
    };
    return fun;
}

function add(...arg) {
    return arg.reduce((a, b) => a + b)
}

let func = add.bind(null, 3, 5, 1, 2, 3)


let res = func()
console.log(res)


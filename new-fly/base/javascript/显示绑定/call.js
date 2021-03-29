Function.prototype.mycall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error("error")
    }
    // console.log(this)
    context = context === null ? window : context
    // console.log(context)
    context.fn = this
    let res = context.fn(...args)
    delete context.fn;
    return res
}

function add(a, b) {
    return a + b
}


let res = add.mycall(null, 3, 5)
console.log(res)
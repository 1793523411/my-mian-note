Function.prototype.myapply = function (context, args) {
    if (typeof this !== "function") {
        throw new Error("error")
    }
    var context = context || window;
    context.fn = this;
    let res = context.fn(...args)
    delete context.fn;
    return res;
}

function add(a, b) {
    return a + b
}

let res = add.myapply(null, [3, 5])
console.log(res)
Function.prototype.myCall = function (ctx, ...arg) {
    console.log(this)
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    ctx = ctx || window
    ctx.fn = this
    const res = ctx.fn(...arg)
    return res;
}

Function.prototype.myApply = function (ctx, arg) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    ctx = ctx || window
    ctx.fn = this;
    const res = ctx.fn(...arg)
    return res;
}

Function.prototype.myBind = function (ctx, ...arg) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    ctx = ctx || window
    return (...args) => {
        this.call(ctx, ...arg.concat(args))
    }
}



let obj = {
    a: 1,
    b: 2,
    c: 3
}

function func() {
    console.log(this.a)
}


func.myCall(obj)

const func2 = function (a, b, c) {
    console.log(a + b + c + this.a + this.b + this.c)
}

let res = func2.myBind(obj, 1, 2)
res(3)


//!test

const arrow = () => [1, 2, 3]

console.log(typeof arrow)
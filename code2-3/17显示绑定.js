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


//!bind五层,主要比上面多了new的考虑
/**
 * 1.绑定在原型上
 * 2.该变thi指向
 * 3.支持柯里化
 * 4.考虑new的调用
 * 5.保留函数原型
 */

Function.prototype._bind = function (thisobj) {
    if (typeof target !== 'function' || Object.prototype.toString.call(target) !== '[object Function]') {
        throw new TypeError('must be a function')
    }
    const self = this;
    const args = [...arguments].slice(1);
    var bound = function () {
        const finalArgs = [...args, ...arguments];
        if (new.target !== undefined) {
            let result = self.apply(this, finalArgs)
            if (result instanceof Object) {
                return result
            }
            return this
        } else {
            return self.apply(this, finalArgs)
        }
    }
    if (self.prototype) {
        bound.prototype = Object.create(self.prototype)
        bound.prototype.constructor = self
    }
    return bound
}
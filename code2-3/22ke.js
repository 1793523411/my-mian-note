/**
 * 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 */
function ke(fn, ...arg) {
    let len = fn.length;
    let args = arg || []

    return function () {
        let arg2 = args.slice(0)
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i])
            arg2.push(arguments[i])
        }
        console.log(arg2)
        if (arg2.length >= len) {
            return fn.apply(this, arg2)
        } else {
            return ke.call(this, fn, ...arg2)
        }
    }
}


function add(a, b, c, d) {
    return a + b + c + d
}

let res = ke(add, 1)
console.log(res(2)(3)(4))
console.log(add(1,2,3,4))


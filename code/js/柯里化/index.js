
//!函数柯里化是指：将多个参数的函数转化成一系列使用一个参数的函数
function curry(fn, args) {
    let length = fn.length;
    args = args || [];
    return function () {
        let subArgs = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {
            subArgs.push(arguments[i])
        }
        if (subArgs.length >= length) {
            return fn.apply(this, subArgs)
        } else {
            return curry.call(this, fn, ...subArgs);
        }
    }
}

function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, "test");
check(/[a-z]+/g, "test")

function curryingCheck(reg) {
    return function (txt) {
        return reg.test(txt)
    }
}

let hasNumber = curryingCheck(/d+/g);
let hasLetter = curryingCheck(/[a-z]+/g)

hasNumber("test1")
hasLetter("212112")

const addEvent = (function () {
    if (window.addEventListener) {
        return function (ele, type, fn, isCapture) {
            ele.addEventListener(type, fn, isCapture);
        }
    } else if (window.attachEvent) {
        return function (ele, type, fn) {
            ele.attachEvent("on" + type, fn)
        }
    }
})()


Function.prototype.bind = function (context) {
    var _this = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        return _this.apply(context, args)
    }
}
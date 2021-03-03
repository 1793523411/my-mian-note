const { type } = require("os");

function _new(ctor, ...args) {
    if (typeof ctor !== "function") {
        throw 'ctor must be a function'
    }
    //1.创建一个新对象；
    let obj = new Object()
    //2.将构造函数的作用域赋给新对象（this 指向新对象）；
    obj.__proto__ = Object.create(ctor.prototype);
    //3.执行构造函数中的代码（为这个新对象添加属性）；
    let res = ctor.apply(obj, [...args]);

    let isObject = typeof res === "object" && typeof res !== null;
    let isFunction = typeof res === "function"
    //4.返回新对象
    return isObject || isFunction ? res : obj
}
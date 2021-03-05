const { type } = require("os");

function _new(ctor, ...args) {
    if (typeof ctor !== "function") {
        throw 'ctor must be a function'
    }
    let obj = new Object();
    obj.__proto__ = Object.create(ctor.prototype);
    let res = ctor.apply(obj, [...args]);

    let isObject = typeof res === "object" && typeof res !== null;
    let isFunction = typeof res === "function"
    return isObject || isFunction ? res : obj
}
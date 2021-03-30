function foo() {
    this.a = 'a';
    this.b = 'b';
}

// const obj = new foo()

foo()

// console.log(obj)

console.log(window.a)
console.log(window.b)

function mynew(fn, ...args) {
    let obj = new Object();
    obj.__proto__ = Object.create(fn.prototype)
    let res = fn.apply(obj, [...args])

    let isObj = typeof res === "object" && typeof res !== null;
    let isFun = typeof res === "function";

    return isObj || isFun ? res : obj
}
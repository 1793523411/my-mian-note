function mynew(fn, ...args) {
    if (typeof fn !== "function") {
        throw new Error("error")
    }
    let obj = new Object();
    obj.__proto__ = fn.prototype;
    let res = fn.apply(obj, [...args])

    let isObj = typeof res === "object" && typeof res !== null;
    let isFun = typeof res === "function"

    return isObj || isFun ? obj : res;
}
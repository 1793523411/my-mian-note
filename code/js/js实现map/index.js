Array.prototype.map2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        console.log(this)
        this[i] = callback(this[i])
    }
    return this
}

let arr = new Array(1, 2, 3, 4, 5, 6)
let res = arr.map2((item) => {
    return item * 2
})
console.log(res)


Array.prototype.map = function (callbackFn, thisArg) {
    let O = Object(this);
    let T = thisArg

    let len = O.length >>> 0;
    let A = new Array(len);
    for (let k = 0; k < len; k++) {
        if (k in O) {
            let KVale = O[k];
            let mappedValue = callbackFn.call(T, KVale, k, O)
            A[k] = mappedValue
        }
    }
    return A
}
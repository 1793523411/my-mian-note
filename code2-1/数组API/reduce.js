Array.prototype.reduce = function (callbackFn, initialValue) {
    if (this === null || this === undefined) {
        throw new TypeError("connot read prototy 'reduce' of null or undefined")
    }

    if (Object.prototype.toString.call(callbackFn) != "[object Function]") {
        throw new TypeError(callbackFn + 'is not a function')
    }

    let O = Object(this)
    let len = O.length >>> 0;
    let k = 0
    let accumlator = initialValue

    if (accumlator === undefined) {
        for (; k < len; k++) {
            if (k in O) {
                accumlator = O[k]
                k++;
                break
            }
        }
        throw new Error('Each element of the array is empty')
    }
    for (; k < len; k++) {
        if (k in O) {
            accumulator = callbackfn.call(undefined, accumulator, O[k], O);
        }
    }
    return accumlator
}
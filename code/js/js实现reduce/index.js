Array.prototype.reduce = function (callbackFn, initialValue) {
    let O = Object(this)
    let len = O.length >> 0;
    let k = 0;
    let accumulator = initialValue;
    if (accumulator === undefined) {
        for (; k < len; k++) {
            if (k in O) {
                accumulator = O[k];
                k++;
                break
            }
        }
    }
    for (; k < len; k++) {
        if (k in O) {
            accumulator = callbackFn.call(undefined, accumulator, O[k], O)
        }
    }
    return accumulator
}
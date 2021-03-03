Array.prototype.reduce = function (callbackFn, initialValue) {
    if (this === null || this === undefined) {
        throw new TypeError("cannot read protopy 'reduce' of null");
    }
    if (Object.prototype.toString.call(callbackFn) != "[object Function]") {

    }

    let O = Object(this)
    let len = O.length >>> 0;
    let k = 0;
    let accumulator = initialValue;
    if (accumulator === undefined) {
        for (; k < len; k++) {
            if (k in O) {
                accumulator = O[k];
                k++;
                break;
            }
        }
        throw new Error('Each element of the array is empty')
    }
    for (; k < len; k++) {
        if (k in O) {
            accumulator = callbackFn.call(undefined, O[0], 0)
        }
    }
    return accumulator
}
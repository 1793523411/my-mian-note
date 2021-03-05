Array.prototype.push = function (...item) {
    let O = Object(this)
    let len = this.length >>> 0;
    let argCount = item.length >>> 0;
    if (len + argCount > 2 * 53 - 1) {
        throw new TypeError('the number of array is over the new value')
    }
    for (let i = 0; i < argCount; i++) {
        O[len + i] = item[i]
    }
    len = newLength = len + argCount;
    return newLength;
}
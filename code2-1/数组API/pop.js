Array.prototype.pop = function () {
    let O = Object(this)
    let len = this.length >>> 0;
    if (len === 0) {
        O.length = 0;
        return undefined
    }
    len--;
    let value = O[len]
    delete O[len]
    return value
}
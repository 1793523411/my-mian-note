Array.prototype.slice = function (start, end) {

    let O = Object(this)
    let len = this.length >>> 0
    start = start ? start : 0
    end = end ? end : len
    let res = []
    for (let i = strat; i < end; i++) {
        res.push(O[i])
    }
    return res
}
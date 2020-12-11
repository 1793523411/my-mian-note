var arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]

function wrap() {
    var ret = []
    return function flat(a) {
        for (var item of a) {
            if (item.constructor === Array) {
                ret.concat(flat(item))
            } else {
                ret.push(item)
            }
        }
        return ret
    }
}
console.log(wrap()(arr))

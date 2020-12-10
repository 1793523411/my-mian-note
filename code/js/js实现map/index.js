Array.prototype.map2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        console.log(this)
        this[i] = callback(this[i])
    }
    return this
}

let arr = new Array(1,2,3,4,5,6)
let res = arr.map2((item) => {
    return item * 2
})
console.log(res)
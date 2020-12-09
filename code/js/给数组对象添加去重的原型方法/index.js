Array.prototype.distinct = function () {
    var ret = []
    console.log(this)
    for (var i = 0; i < this.length; i++) {
        for (var j = i + 1; j < this.length;) {
            if (this[i] === this[j]) {
                ret.push(this.splice(j, 1)[0])
            } else {
                j++
            }
        }
    }
    return ret
}
console.log(["a", "b", "c", "d", "b", "a", "e"].distinct())
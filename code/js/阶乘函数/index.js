Number.prototype.N = function () {
    var re = 1;
    for (var i = 1; i <= this; i++) {
        re *= i;
    }
    return re;
}
var num = 5
console.log(num.N())
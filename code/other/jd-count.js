let add = (function () {
    var count = 0;
    return function () {
        return count++;
    }
})()

let num = add()
let num2 = add()
let num3 = add()

console.log(num3)
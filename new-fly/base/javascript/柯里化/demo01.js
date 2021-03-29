let curry = function (fn) {
    let args = Array.prototype.slice.call(arguments, 1)

    return function () {
        let newArgs = args.concat(Array.prototype.slice.call(arguments, 0))
        return fn.apply(this, newArgs)
    }
}


function add(a, b) {
    return a + b;
}

var addCurry = curry(add, 1, 2);
console.log(addCurry())
addCurry() // 3
//或者
var addCurry = curry(add, 1);
addCurry(2) // 3
//或者
var addCurry = curry(add);
addCurry(1, 2) // 3
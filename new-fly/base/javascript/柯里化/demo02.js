function sub_curry(fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)))
    };
}

function curry(fn, length) {
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function () {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments)
        }
    }
}

var fn = curry(function (a, b, c) {
    return [a, b, c];
});

console.log(fn("a", "b", "c"))
console.log(fn("a", "b")("c"))
console.log(fn("a")("b")("c"))
console.log(fn("a")("b", "c"))

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]


function sub_curry(fn) {
    return function () {
        return fn()
    }
}

function curry(fn, length) {
    length = length || 4;
    return function () {
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        } else {
            return fn()
        }
    }
}

var fn0 = function(){
    console.log(1)
}

var fn1 = curry(fn0)

console.log(fn1()()()() )

// fn1()()()() // 1
function curry(fn, args) {
    var length = fn.length;

    args = args || [];
    return function () {
        var _args = args.slice();
        var arg, i;
        for (i = 0; i < arguments.length; i++) {
            _args.push(arguments[i])
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args)
        } else {
            return fn.apply(this, _args)
        }
    }
}
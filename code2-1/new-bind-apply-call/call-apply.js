Function.prototype.call = function (context, ...args) {
    var context = context || window;
    context.fn = this;
    let result = eval('context.fn(...args)')
    delete context.fn;
    return result
}

Function.prototype.apply = function (context, args) {
    var context = context || window;
    context.fn = this;
    let result = eval('context.fn(...args)')
    delete context.fn;
    return result;
}
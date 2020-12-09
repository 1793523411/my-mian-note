//call 参数不为数组

Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this

    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("argument[" + i + "]")
    }
    var result = eval("context.fn(" + args + ")");
    delete context.fn;
    return result
}

//apply 参数为数组

Function.prototype.apply2 = function (context, arr) {
    var context = Object(context) || window
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]")
        }
        result = eval("context.fn(" + args + ")")
    }
    delete context.fn;
    return result
}

//bind

Function.prototype.bind2 = function (context) { 
    if(typeof this !== "function"){
        throw new Error(
            "must be Function"
        )
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var fNOP = function(){}
    var fbound = function(){
        self.apply(
            this instanceof self ? this : context,
            args.concat(Array.prototype.slice.call(arguments))
        )
    }
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound
}
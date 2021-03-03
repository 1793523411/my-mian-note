
Function.prototype.call = function (context, ...args) {
    var context = context || window;
    context.fn = this;
    let result = eval('context.fn(...args)');
    delete context.fn;
    return result
}

Function.prototype.apply = function (context, args) {
    var context = context || window;
    context.fn = this;
    let result = eval('context.fn(...args)')
    delete context.fn;
    return result
}

const pay = 'WeChatpay'
function showType() { console.log('pay type:', this.pay) }
showType.call();

// Function.prototype._call = function (context, ...args) {
//     context = context || window
//     // 复制函数 
//     context._call_interim_fn = new Function(`return ${this}`)() // 执行 
//     const result = context._call_interim_fn(...args) // 删除临时属性 
//     delete context._call_interim_fn
//     return result
// }
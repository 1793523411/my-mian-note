/*
对于每个执行上下文，都有三个重要属性：
变量对象(Variable object，VO)
作用域链(Scope chain)
this
 */

var scope = "global scope";
function checkscope() {
    this.name = 'aaa'
    var scope2 = 'local scope';
    return scope2;
}
checkscope();

console.log(new checkscope())
function Person() {
    this.name = 'Jack';
    this.color = [1, 2, 3]
}
var p = new Person();
var q = new Person();
q.name = "111"
q.color.push(999)
console.log(p.name)  // Jack
console.log(p.color)

//!new
// 创建一个新对象；

// 将构造函数的作用域赋给新对象（this 指向新对象）；

// 执行构造函数中的代码（为这个新对象添加属性）；

// 返回新对象。

let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr);
const min = Math.min.apply(Math, arr);

console.log(max);  // 16
console.log(min);  // 6
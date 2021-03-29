var value = 1;
var foo = {
    value: 2,
    bar: function () {
        return this.value
    }
}

console.log(foo.bar())
console.log((foo.bar)())
console.log((foo.bar = foo.bar)())
console.log((false || foo.bar)())
console.log((foo.bar, foo.bar)())

// function foo() {
//     console.log(this)
// }

// foo(); 

// function Foo(){
// 	getName = function(){
// 		console.log(1);					
//         };
// 	return this
// }
			
// function getName(){
// 	console.log(5);
// }

// Foo().getName();

// function Foo(){
//     getName = function(){
//         console.log(1);					
//     };
//     return this;
// }

// Foo.prototype.getName = function(){
//     console.log(3);
// };

// function getName(){
//     console.log(5);
// };
// new Foo().getName()//3  -> (new Foo()).getName() //成员访问 和 new (带参数列表)的优先级都为 19，相同等级下，遇到谁先执行谁
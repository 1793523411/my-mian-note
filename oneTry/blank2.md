## new 和 Object.create()的实现

```js
function myNew(func, ...args) {
  let obj = new Object();
  obj.__proto__ = Object.create(func.pototype);
  let res = func.apply(obj, [...args]);

  let isObj = typeof res === "object" && res !== null;
  let isFunc = typeof res === "function" ? true : false;
  return isObj || isFunc ? res : obj;
}

function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
```

## new 和 Object.create()的区别

实际 new 创建对象，就是调用构造函数来实例化，在调用构造函数的时候会执行以下操作：

- 创建一个新的对象
- 将新对象执行原型操作，指向构造函数的原型
- 将 this 绑定到新对象上（可以使用 call 或者 apply 强制转换执行环境）
- 构造函数返回的对象就是实例化的结果，如果构造函数没有显示返回一个对象，则返回新的对象

Object.create()是 Object 的内置方法，可以创建一个新对象，使用现有的对象来提供新创建的对象`__proto__`

该方法有两个参数，第一个 proto 是一个对象，作为新建对象的原型；第二个参数是一个对象，该对象的属性名称是新创建的对象的属性名称。如果 proto 参数不是 null 或者一个对象，则会抛错

使用该方法，创建对象会执行以下步骤：

- 方法内部定义一个新的空对象 obj
- 将`obj.__proto__`的对象指向传入的参数 proto
- 将传入的对象属性复制到 obj 并且返回 obj

|   比较   |            new            |      Object.create      |
| :------: | :-----------------------: | :---------------------: |
| 构造函数 |    保留原构造函数属性     |   丢失原构造函数属性    |
|  原型链  | 原构造函数 prototype 属性 | 原构造函数/（对象）本身 |
| 作用对象 |         function          |   function 和 object    |

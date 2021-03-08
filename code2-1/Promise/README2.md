## 术语

“promise”：是一个具有 then 方法的对象或者函数，它的行为符合该规范。

“thenable”：是一个定义了 then 方法的对象或者函数。

“value”：可以是任何一个合法的 JavaScript 的值（包括 undefined、thenable 或 promise）。

“exception”：是一个异常，是在 Promise 里面可以用 throw 语句抛出来的值。

“reason”：是一个 Promise 里 reject 之后返回的拒绝原因。

## 状态描述

一个 Promise 有三种状态：pending、fulfilled 和 rejected。

当状态为 pending 状态时，即可以转换为 fulfilled 或者 rejected 其中之一。

当状态为 fulfilled 状态时，就不能转换为其他状态了，必须返回一个不能再改变的值。

当状态为 rejected 状态时，同样也不能转换为其他状态，必须有一个原因的值也不能改变。

## then 方法

一个 Promise 必须拥有一个 then 方法来访问它的值或者拒绝原因,onFulfilled  和  onRejected  都是可选参数

## onFulfilled 和 onRejected  特性

如果  onFulfilled  是函数，则当 Promise 执行结束之后必须被调用，最终返回值为 value，其调用次数不可超过一次。而 onRejected 除了最后返回的是 reason 外，其他方面和 onFulfilled 在规范上的表述基本一样。

## 多次调用

then 方法其实可以被一个 Promise 调用多次，且必须返回一个 Promise 对象。then 的写法如下所示，其中 Promise1 执行了 then 的方法之后，返回的依旧是个 Promise2，然后我们拿着 Promise2 又可以执行 then 方法，而 Promise2 是一个新的 Promise 对象，又可以继续进行 then 方法调用。

```js
promise2 = promise1.then(onFulfilled, onRejected);
```

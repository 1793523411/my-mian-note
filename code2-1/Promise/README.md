# PromiseA+规范

## then 函数

then 函数接收两个函数作为可选参数：

```js
promise.then(onFulfilled, onRejected);
```

同时遵循下面几个规则：

1. 如果可选参数不为函数时应该被忽略；

2. 两个函数都应该是异步执行的，即放入事件队列等待下一轮 tick，而非立即执行；

3. 当调用 onFulfilled 函数时，会将当前 Promise 的值作为参数传入；

4. 当调用 onRejected 函数时，会将当前 Promise 的失败原因作为参数传入；

5. then 函数的返回值为 Promise。

## Promise 状态

Promise 的 3 个状态分别为 pending、fulfilled 和 rejected。

1. pending：“等待”状态，可以转移到 fulfilled 或者 rejected 状态

2. fulfilled：“执行”（或“履行”）状态，是 Promise 的最终态，表示执行成功，该状态下不可再改变。

3. rejected：“拒绝”状态，是 Promise 的最终态，表示执行失败，该状态不可再改变。

## Promise 解决过程

Promise 解决过程是一个抽象的操作，即接收一个 promise 和一个值 x，目的就是对 Promise 形式的执行结果进行统一处理。需要考虑以下 3 种情况

1. 情况 1： x 等于 promise

抛出一个 TypeError 错误，拒绝 promise。

2. 情况 2：x 为 Promise 的实例

如果 x 处于等待状态，那么 promise 继续等待至 x 执行或拒绝，否则根据 x 的状态执行/拒绝 promise。

3. 情况 3：x 为对象或函数

该情况的核心是取出 x.then 并调用，在调用的时候将 this 指向 x。将 then 回调函数中得到结果 y 传入新的 Promise 解决过程中，形成一个递归调用。其中，如果执行报错，则以对应的错误为原因拒绝 promise。

这一步是处理拥有 then() 函数的对象或函数，这类对象或函数我们称之为“thenable”。注意，它只是拥有 then() 函数，并不是 Promise 实例。

4. 情况 4：如果 x 不为对象或函数

以 x 作为值，执行 promise。


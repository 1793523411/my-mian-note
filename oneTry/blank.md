**题目描述**

```js
/**
 * 点击提交按钮，如果短时间内连续点击多次，会发送多次相同请求，为了避免这种情况
 * 实现一个通用的包装函数singlePipe，使得被包装的请求函数，在请求过程中如果再
 * 次调用该函数，不会发出请求，直到该次请求完成后才能再次发出请求;
 * @param {*} promiseFunc
 */
const singlePipe = function (promiseFunc) {
  // TODO:
};
// 测试
var promiseFunc = function (data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};
var request = singlePipe(promiseFunc);
request(1).then((data) => console.log(data)); // 1
request(2).then((data) => console.log(data)); // 无反应
setTimeout(() => {
  request(3).then((data) => console.log(data)); // 3
}, 1000);
```

方法一：使用 Promise

```js
const singlePipe = function (promiseFunc) {
  let sign = false;

  function work(...arg) {
    if (!sign) {
      sign = true;
      return new Promise((resolve, reject) => {
        resolve(...arg);
      }).then((res) => {
        sign = false;
        return res;
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve("");
      });
    }
  }
  return work;
};
```

方法二：使用 async/awiat

```js
const singlePipe = function (promiseFunc) {
  let sign = false;

  async function work(...arg) {
    if (!sign) {
      sign = true;
      let res = await promiseFunc(...arg);
      return res;
    }
    sign = false;
    return "";
  }
  return work;
};
```

## 一些经典的手写题

### 深拷贝和浅拷贝

**浅拷贝**

```js
const shallowClone = (arr) => {
  let res = Array.isArray(arr) ? [] : {};
  for (let [key, value] of Object.entries(arr)) {
    res[key] = value;
  }
  return res;
};
```

**深拷贝**

```js
const deepClone = (arr, map = new WeakMap()) => {
  if (arr.constructor === Date) return new Date(arr);
  if (arr.constructor === RegExp) return new RegExp(arr);
  let res = Object.create(
    Object.getPrototypeOf(arr),
    Object.getOwnPropertyDescriptors(arr)
  );
  if (map.has(arr)) return map.get(arr);
  map.set(arr, res);
  for (let item of Reflect.ownKeys(arr)) {
    if (typeof arr[item] === "object") {
      res[item] = deepClone(arr[item], map);
    } else {
      res[item] = arr[item];
    }
  }
  return res;
};
```

### 数组扁平化

```js
const myFlat = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(myFlat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
```

### 数组去重

```js
const dedupe = (arr, handler) => {
  let clone = [];
  let lookup = {};
  handler = handler || JSON.stringify;
  for (let i = 0; i < arr.length; i++) {
    let tmp = handler(arr[i]);

    if (!lookup[tmp]) {
      clone.push(arr[i]);
      lookup[tmp] = true;
    }
  }
  return clone;
};
```

### bind,call,apply

```js
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx || window;
  let fn = this;
  ctx.fn = fn;
  let res = eval("ctx.fn(...args)");
  delete ctx.fn;
  return res;
};

Function.prototype.myApply = function (ctx, ...args) {
  ctx = ctx || window;
  let fn = this;
  ctx.fn = fn;
  let res = eval("ctx.fn(args)");
  delete ctx.fn;
  return res;
};

Function.prototype.myBind = function (ctx, ...args) {
  let that = this;
  let func = function () {
    let arg = args.concat(Array.prototype.slice.call(arguments));
    that.apply(ctx, arg);
  };
  return func;
};
```

### 手写 new 和 Object.create()

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

### 手写遍历器

```js
function iterator(arr) {
  let index = 0;
  return {
    next: function () {
      return index > arr.length
        ? {
            val: undefined,
            done: true,
          }
        : {
            val: arr[index++],
            done: false,
          };
    },
  };
}
```

### 二分查找

```js
function binchSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
    else return mid;
  }
  return -1;
}
```

### 手写 Instanceof

```js
function myInstance(left, right) {
  if (typeof left !== "object" || typeof obj !== null) return false;
  let L = Object.getPrototypeOf(left);
  let R = right.__proto__;
  while (true) {
    if (L === null) return false;
    if (L === R) return true;
    L = Object.prototype(L);
  }
}
```

### 防抖节流

防抖

```js
const debounce = (func, wait = 0) => {
  let time = null;
  let arg = [];
  function debounced(...args) {
    if (time) {
      clearTimeout(time);
      time = null;
    }
    arg = args;
    return new Promise((resolve, reject) => {
      time = setTimeout(async () => {
        try {
          let res = await func.apply(this, ...arg);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      }, wait);
    });
  }

  function cancel() {
    clearTimeout(time);
    time = null;
    arg = null;
  }
  function flush() {
    cancel();
    return func.apply(this, arg);
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
};
```

节流

```js
const throttle = (func, wait = 0) => {
    let time = null;
    let arg = [];
    let now;
    function throttled(...args) {
        if (!now) now = new Date().getTime()
        if (time) {
            clearTimeout(time)
            time = null;
        }
        arg = args
        return new Promise((resolve, reject) => {
            if (new Date().getTime() - now > wait) {
                try {
                    const result = await func.apply(this, args)
                    resolve(result)
                } catch (e) {
                    reject(e)
                } finally {
                    cancel()
                }
            } else {
                time = setTimeout(async () => {
                    try {
                        let res = await func.apply(this, ...arg)
                        resolve(res)
                    } catch (e) {
                        reject(e)
                    } finally {
                        cancel()
                    }

                }, wait - (new Date().getTime() - now > wait));
            }

        })
    }

    function cancel() {
        clearTimeout(time)
        time = null;
        arg = null;
        now = null;
    }
    function flush() {
        cancel()
        return func.apply(this, arg)
    }

    throttled.cancel = cancel;
    throttled.flush = flush;
    return throttled
}
```

### 洗牌算法

```js
function work(arr) {
  let res = [];
  while (arr.length) {
    let tmp = Math.random() * arr.length;
    res.push(arr[tmp]);
    arr.splice(tmp, 1);
  }
  return res;
}
```

### 树的前中层序遍历

```js
function front(root) {
  let stack = [root];
  let res = [];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
}

function middle(root) {
  let stack = [];
  let res;
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      let node = stack.pop();
      res.push(node.val);
      stack.push(node.right);
    }
  }
  return res;
}

function end(root) {
  let stack = [root];
  let stack2 = [];
  while (stack1.length) {
    let node = stack.pop();
    stack2.push(node);
    node.left && stack.push(left);
    node.right && stack.push(right);
  }
  while (stack2.length) {
    res.push(stack2.pop().val);
  }
  return res;
}

function ceng(root) {
  let queue = [root];
  let res = [];
  while (queue.length) {
    let node = queue.shift();
    res.push(node.val);
    node.left && queue.push(ndoe.left);
    node.right && queue.push(ndoe.right);
  }
  return res;
}
```

### 排序

```js
//快速排序
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length < 1 || start > end) return;
  let index = poition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function position(arr, start, end) {
  let tmp = arr[start];
  while (start < end) {
    while (arr[end] >= tmp && start < end) end--;
    arr[start] = arr[end];
    while (arr[start] < tmp && start < end) start++;
    arr[end] = arr[start];
  }
  arr[start] = tmp;
  return start;
}

//冒泡排序
function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return;
  let sign;
  for (let i = 0; i < arr.length; i++) {
    sign = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        sign = false;
      }
    }
    if (sign) break;
  }
}

//插入排序
function inertSort(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i;
    while (j - 1 >= 0 && arr[j - 1] > tmp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tmp;
  }
}

//归并排序
function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length < 1) return;
  if (arr.length === 1) return arr;
  let mid = parseInt(arr.length >>> 1);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid.arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let res = [];
  let i1 = [];
  let i2 = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] > arr2[i2]) res.push(arr[i2++]);
    else res.push(arr[i1++]);
  }
  while (i1 < arr1.length) res.push(arr1[i1]);
  while (i2 < arr2.length) res.push(arr2[i2]);
  return res;
}

//选择排序
function selectSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > min) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}
```

### 简单的发布订阅者模式

```js
class myEventEmmiter {
  constructor() {
    this.map = new Map();
  }
  on(name, handler, once = false) {
    if (this.map.has(name)) {
      let tmp = {
        handler,
        once,
      };
      this.map.get(name).push(tmp);
    } else {
      this.map.set(name, [
        {
          handler,
          once,
        },
      ]);
    }
  }
  emit(name, ...arg) {
    let res = this.map.get(name) || [];
    res.forEach((item) => {
      item.handler(...arg);
      if (item.once) {
        this.off(name, item.handler);
      }
    });
  }
  off(name, handler) {
    let res = this.map.get(name);
    let index = res.findIndex((item) => item.handler === handler);
    res.splice(index, 1);
  }
  once(name, handler) {
    this.emit(name, handler, true);
  }
  offAll(name) {
    this.map.delete(name);
  }
}

let myevent = new myEventEmmiter();

const fun1 = () => console.log("func1");
const fun2 = () => console.log("func2");
const fun3 = () => console.log("func3");

myevent.on("first", fun1);
myevent.on("first", fun2);
myevent.on("first", fun3);

myevent.emit("first");

myevent.off("first", fun2);

myevent.emit("first");
```

### 简单的观察者模式

```js
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  notify() {
    this.subs.forEach((item) => {
      item.update(item.name);
    });
  }
}

class Watch {
  constructor(name) {
    this.name = name;
  }
  update(name) {
    console.log("update:", name);
  }
}

let dep = new Dep();
let watch = new Watch("watch");
dep.addSub(watch);
dep.notify();
```

### 封装 fetch

```js
function fetchRequest(method, url, data = {}, time = 5000) {
  let payload = null;
  let query = "";
  if (method === "GET") {
    for (const key in data) {
      query += `&${key}=${data[key]}`;
    }
    if (query) {
      query = "?" + query.slice();
    }
  } else {
    payload = JSON.stringify(data);
  }
  return new Promise((resolve, reject) => {
    fetch(url + query, {
      credentials: "include",
      method,
      headers: {
        "Content-Type": "xxx",
      },
      body: payload,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
    setTimeout(() => {
      reject(reject.bind(this, "fetch i time out"));
    }, time);
  });
}

fetchRequest("GET", "xxx").then((res) => {
  console.log(res);
});
```

### 封装 ajax

```js
function ajaxRequest(method, url, data = {}, successFn, failFn) {
  const XHR = new XMLHttpRequest();
  let sendData = "";
  for (let key in data) {
    sendData += `&${key}=${data[key]}`;
  }
  switch (method) {
    case "GET":
      url = sendData ? `${url}?${sendData}` : url;
      sendData = null;
      break;
    case "POST":
      if (sendData) {
        sendData = sendData.slice(1);
      }
      break;
  }
  XHR.onreadystatechange = function () {
    if (XHR.readyState !== 4) return;
    if (XHR.status === 200 || XHR.status === 304) {
      typeof successFn === "function" && successFn(XHR.response);
    } else {
      typeof failFn === "function" && failFn(XHR);
    }
  };
  XHR.open(method, url, true);
  XHR.setRequestHeader("Content-Type", "application/x-www/from-urlencoded");
  XHR.send(sendData);
}
```

### sleep 实现

```js
function sleep(time) {
  let start = new Date().getTime();
  let end;
  while (true) {
    end = new Date().getTime();
    console.log(`end-start=${end - start}`);
    if (end - start > time) break;
  }
  return "end";
}
```

或

```js
function sleep2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function foo(time) {
  console.log("start");
  await sleep2(time);
  console.log("end");
}
```

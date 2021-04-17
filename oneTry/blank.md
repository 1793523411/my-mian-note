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

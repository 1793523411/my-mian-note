## js 实现一个函数，完成超过范围的两个大整数相加功能

```js
// 主要思路是通过将数字转换为字符串，然后每个字符串在按位相加。
function bigNumberAdd(number1, number2) {
  let result = "", // 保存最后结果
    carry = false; // 保留进位结果
  // 将字符串转换为数组
  number1 = number1.split("");
  number2 = number2.split("");
  // 当数组的长度都变为 0，并且最终不再进位时，结束循环
  while (number1.length || number2.length || carry) {
    // 每次将最后的数字进行相加，使用~~的好处是，即使返回值为 undefined 也能转换为
    0;
    carry += ~~number1.pop() + ~~number2.pop();
    // 取加法结果的个位加入最终结果
    result = (carry % 10) + result;
    // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
    carry = carry > 9;
  }
  // 返回最终结果
  return result;
}
```

## js 如何实现数组扁平化？

```js
// 这一种方法通过递归来实现，当元素为数组时递归调用，兼容性好
function flattenArray(array) {
  if (!Array.isArray(array)) return;
  let result = [];
  result = array.reduce(function (pre, item) {
    // 判断元素是否为数组，如果为数组则递归调用，如果不是则加入结果数组中
    return pre.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
  return result;
}
// 这一种方法是利用了 toString 方法，它的一个缺点是改变了元素的类型，只适合于数组中元素都是整数的情况
function flattenArray(array) {
  return array
    .toString()
    .split(",")
    .map(function (item) {
      return +item;
    });
}
```

## js 如何实现数组去重

```js
function unique(array) {
  if (!Array.isArray(array) || array.length <= 1) return;
  var result = [];
  array.forEach(function (item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}
function unique(array) {
  if (!Array.isArray(array) || array.length <= 1) return;
  return [...new Set(array)];
}
```

## 如何求数组的最大值和最小值

```js
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null, arr));
```

## 如何求两个数的最大公约数

```js
// 基本思想是采用辗转相除的方法，用大的数去除以小的那个数，然后再用小的数去除以的得到的余数，一直这样递归下去，直到余数为 0 时，最后的被除数就是两个数的最大公约数。
function getMaxCommonDivisor(a, b) {
  if (b === 0) return a;
  return getMaxCommonDivisor(b, a % b);
}
```

## 如何求两个数的最小公倍数

```js
// 基本思想是采用将两个数相乘，然后除以它们的最大公约数
function getMinCommonMultiple(a, b) {
  return (a * b) / getMaxCommonDivisor(a, b);
}
```

## 实现 IndexOf 方法

```js
function indexFun(array, val) {
  if (!Array.isArray(array)) return;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}
```

## 判断一个字符串是否为回文字符串

```js
function isPalindrome(str) {
  let reg = /[\W_]/g, // 匹配所有非单词的字符以及下划线
    newStr = str.replace(reg, "").toLowerCase(), // 替换为空字符并将大写字母转换为小写;
    reverseStr = newStr.split("").reverse().join(""); // 将字符串反转
  return reverseStr === newStr;
}
```

## 实现一个累加函数的功能比如 sum(1,2,3)(2).valueOf()

```js
function sum(...args) {
  let result = 0;
  result = args.reduce(function (pre, item) {
    return pre + item;
  }, 0);
  let add = function (...args) {
    result = args.reduce(function (pre, item) {
      return pre + item;
    }, result);
    return add;
  };
  add.valueOf = function () {
    console.log(result);
  };
  return add;
}
```

## 使用 reduce 现 方法实现 forEach 、map 、filter

```js
// forEach
function forEachUseReduce(array, handler) {
  array.reduce(function (pre, item, index) {
    handler(item, index);
  });
}
// map
function mapUseReduce(array, handler) {
  let result = [];
  array.reduce(function (pre, item, index) {
    let mapItem = handler(item, index);
    result.push(mapItem);
  });
  return result;
}
// filter
function filterUseReduce(array, handler) {
  let result = [];
  array.reduce(function (pre, item, index) {
    if (handler(item, index)) {
      result.push(item);
    }
  });
  return result;
}
```

## 设计一个简单的任务队列，要求分别在 1,3,4 出 秒后打印出 "1", "2", "3"

```js
class Queue {
  constructor() {
    this.queue = [];
    this.time = 0;
  }
  addTask(task, t) {
    this.time += t;
    this.queue.push([task, this.time]);
    return this;
  }
  start() {
    this.queue.forEach((item) => {
      setTimeout(() => {
        item[0]();
      }, item[1]);
    });
  }
}
```

## 如何查找一篇英文文章中出现频率最高的单词

```js
function findMostWord(article) {
  // 合法性判断
  if (!article) return;
  // 参数处理
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g),
    visited = [],
    maxNum = 0,
    maxWord = "";
  article = " " + wordList.join(" ") + " ";
  // 遍历判断单词出现次数
  wordList.forEach(function (item) {
    if (visited.indexOf(item) < 0) {
      let word = new RegExp(" " + item + " ", "g"),
        num = article.match(word).length;
      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + " " + maxNum;
}
```

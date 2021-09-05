// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

const { branchSearch } = require("../two/01");

const work = (arr, target) => {
  let row = arr.length - 1;
  let col = 0;
  while (row >= 0 && col < arr[0].length) {
    if (target < arr[row][col]) row--;
    else if (target > arr[row][col]) col++;
    else if (target === arr[row][col]) return true;
  }

  return false;
};

const work2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === target) return true;
    }
  }
  return false;
};

const work3 = (arr, target) => {
  let i = 0;
  let length = arr[0].length - 1;
  while (i < arr.length) {
    if (arr[i][0] <= target && arr[i][length] >= target) {
		const res = branchSearch(arr[i], target);
		console.log(res)
      if (res !== -1) return true;
    }
    i++;
  }
  return false;
};

//work3和work4一样的，都避免不了重复无效的查找
const work4 = (arr, target) => {
  let row = arr.length - 1;
  const length = arr[0].length - 1;
  while (row >= 0) {
    if (arr[row][0] <= target && arr[row][length] >= target) {
		const res = branchSearch(arr[row], target);
		console.log(res)
      if (res !== -1) return true;
    }
    row--;
  }
  return false;
};

let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 3;

console.log(work2(arr, target));

console.log(work(arr, target));
console.log(work3(arr, target));
console.log(work4(arr, target));

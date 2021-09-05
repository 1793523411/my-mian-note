//sort

const genRandomArr = (len) => {
  let count = len;
  let arr = [];
  while (count--) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

const bubbleSortBetter = (arr) => {
  let sign = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sign = false;
      }
    }
    if (sign) break;
  }
  return arr;
};

const bubbleSortBetter2 = (arr) => {
  let lastIndex = arr.length - 1;
  while (lastIndex > 0) {
    let sign = true;
    let k = lastIndex;
    for (let i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sign = false;
        lastIndex = i;
      }
    }
    if (sign) break;
  }
  return arr;
};

const selectSortOrigin = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

const selectSort = (arr) => {
  let maxIndex = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    maxIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) maxIndex = j;
    }
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    max = -Infinity;
  }
  return arr;
};

const insertSort = (arr) => {
  let index;
  for (let i = 1; i < arr.length; i++) {
    index = i;
    // curVal = arr[i];
    while (index > 0) {
      if (arr[index] < arr[index - 1]) {
        [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      }
      index--;
    }
  }
  return arr;
};

const insertSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i;
    while (j > 0 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tmp;
  }
  return arr;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return arr;
  let index = getPosition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};
const getPosition = (arr, start, end) => {
  let tmp = arr[start];

  while (start < end) {
    while (arr[end] >= tmp && start < end) end--;
    arr[start] = arr[end];
    while (arr[start] < tmp && start < end) start++;
    arr[end] = arr[start];
  }
  arr[start] = tmp;
  return start;
};

const mergeSort = (arr) => {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }
  const mid = parseInt(length >> 1);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(left, right);
};
const merge = (left, right) => {
  let result = [];
  let leftLength = left.length;
  let rightLength = right.length;
  let li = 0;
  let ri = 0;
  while (li < leftLength && ri < rightLength) {
    if (left[li] > right[ri]) {
      result.push(right[ri]);
      ri++;
    }
    if (left[li] <= right[ri]) {
      result.push(left[li]);
      li++;
    }
  }
  while (li < leftLength) result.push(left[li++]);
  while (ri < rightLength) result.push(right[ri++]);
  return result;
};

let sortArr = genRandomArr(10);
console.log(sortArr);
console.log(bubbleSort(sortArr));

let sortArr2 = genRandomArr(10);
console.log(sortArr2);
console.log("bubbleSortBetter", bubbleSortBetter(sortArr2));

let sortArr3 = genRandomArr(10);
console.log(sortArr3);
console.log("bubbleSortBetter2", bubbleSortBetter2(sortArr3));

let selectSortArr = genRandomArr(10);
console.log(selectSortArr);
console.log(selectSort(selectSortArr));

let insertSortArr = genRandomArr(10);
console.log(insertSortArr);
console.log(insertSort(insertSortArr));

let insertSortArr2 = genRandomArr(10);
console.log(insertSortArr2);
console.log(insertSort2(insertSortArr2));

let quickSortArr = genRandomArr(10);
console.log(quickSortArr);
quickSort(quickSortArr);
console.log(quickSortArr);

let mergeSortArr = genRandomArr(10);
console.log(mergeSortArr);
console.log(mergeSort(mergeSortArr))

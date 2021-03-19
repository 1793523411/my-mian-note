const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const quickSort = (arr, start = 0, end = arr.length-1) => {
    let length = arr.length;
    if (!Array.isArray(arr) || length < 1 || start >= end) return;
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

const partition = (arr, start, end) => {
    let pivot = arr[start];
    while (start < end) {
        while (arr[end] >= pivot && start < end) end--;
        arr[start] = arr[end];
        while (arr[start] < pivot && start < end) start++;
        arr[end] = arr[start]
    }
    arr[start] = pivot;
    return start
}

quickSort(arr)

console.log(arr)
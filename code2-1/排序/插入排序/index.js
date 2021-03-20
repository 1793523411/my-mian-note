const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const insertSort = (arr) => {
    let length = arr.length;
    if (!Array.isArray(arr) || length <= 1) return;
    for (let i = 1; i < length; i++) {
        let tmp = arr[i];
        let j = i;
        while (j - 1 >= 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--;
        }
        arr[j] = tmp
    }
}

insertSort(arr)

console.log(arr)
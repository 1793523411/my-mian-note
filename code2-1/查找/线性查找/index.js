const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const lineSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1;
}

console.log(lineSearch(arr,5))
const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const selectSort = (arr) => {
    let length = arr.length
    if (!Array.isArray(arr) || length <= 1) return;
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
}

selectSort(arr)

console.log(arr)
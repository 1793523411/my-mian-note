const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const hillSort = (arr) => {
    let length = arr.length;
    if (!Array.isArray(arr) || length <= 1) return;
    for (let gap = parseInt(length >> 1); gap >= 1; gap = parseInt(gap >> 1)) {
        for (let i = gap; i < length; i++) {
            let tmp = arr[i]
            let j = i;
            while (j - gap >= 0 && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap]
                j = j - gap
            }
            arr[j] = tmp
        }
    }
}

hillSort(arr)

console.log(arr)
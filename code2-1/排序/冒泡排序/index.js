const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const bubbleSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) {
        let flag = true;
        let k = lastIndex;
        for (let j = 0; j < k; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false
                lastIndex = j;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (flag) break;
    }
}

bubbleSort(arr)

console.log(arr)
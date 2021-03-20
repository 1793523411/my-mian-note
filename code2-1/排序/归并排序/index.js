const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)

const mergeSort = (arr) => {
    let length = arr.length;
    if (!Array.isArray(arr) || length === 0) return;
    if (length === 1) {
        return arr
    }
    let mid = parseInt(length >> 1)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, length)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let result = [];
    let leftLength = left.length;
    let rightLength = right.length;
    let il = 0;
    let ir = 0;
    while (il < leftLength && ir < rightLength) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < leftLength) result.push(left[il++])
    while (ir < rightLength) result.push(right[ir++])
    return result
}



console.log(mergeSort(arr))
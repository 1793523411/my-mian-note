const mergeSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let mid = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0, mid)
    let arr2 = arr.slice(mid)
    return merge(mergeSort(arr1), mergeSort(arr2))
}

const merge = (arr1, arr2) => {
    let i = j = 0;
    let res = []
    while (i < arr1.length || j < arr2.length) {
        if (arr[i] <= arr[j]) {
            res.push(arr[i])
            i++;
        } else if (arr[i] > arr[j]) {
            res.push(arr[j])
            j++
        }
    }
    if (i === arr1.length) {
        res.concat(arr2.slice(j))
    } else if (j === arr2.length) {
        res.concat(arr1.slice(i))
    }
    return res;
}

const arr = [1, 4, 6, 3, 4, 8, 9, 2]

mergeSort(arr)

console.log(arr)
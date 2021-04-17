//快速排序
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (!Array.isArray(arr) || arr.length < 1 || start > end) return;
    let index = poition(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

function position(arr, start, end) {
    let tmp = arr[start]
    while (start < end) {
        while (arr[end] >= tmp && start < end) end--;
        arr[start] = arr[end]
        while (arr[start] < tmp && start < end) start++;
        arr[end] = arr[start]
    }
    arr[start] = tmp
    return start
}

//冒泡排序
function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length < 1) return
    let sign;
    for (let i = 0; i < arr.length; i++) {
        sign = true
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
                sign = false
            }
        }
        if (sign) break
    }
}

//插入排序
function inertSort(arr) {
    if (!Array.isArray(arr) || arr.length < 1) return
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i
        while (j - 1 >= 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--;
        }
        arr[j] = tmp
    }
}

//归并排序
function mergeSort(arr) {
    if (!Array.isArray(arr) || arr.length < 1) return
    if (arr.length === 1) return arr;
    let mid = parseInt(arr.length >>> 1)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid.arr.length)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(arr1, arr2) {
    let res = []
    let i1 = []
    let i2 = []
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] > arr2[i2]) res.push(arr[i2++])
        else res.push(arr[i1++])
    }
    while (i1 < arr1.length) res.push(arr1[i1])
    while (i2 < arr2.length) res.push(arr2[i2])
    return res;
}

//选择排序
function selectSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > min) min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
}
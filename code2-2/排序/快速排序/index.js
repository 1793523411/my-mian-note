const quickSort = (array, start = 0, end = array.length - 1) => {
    let length = arr.length;
    if (!Array.isArray(array) || length < 1 || start >= end) return;
    let index = position(array, start, end)
    quickSort(array, start, index - 1)
    quickSort(array, index + 1, end)
}

const position = (arr, start, end) => {
    let tmp = arr[0]
    while (start <= end) {
        while (arr[end] >= tmp && start < end) end--;
        arr[start] = tmp
        while (arr[start] < tmp && start < end) start++;
        arr[end] = arr[start]
    }
    arr[start] = tmp
    return start
}

const quickSort = (arr, start = 0, end = arr.length) => {
    let length = arr.length;
    if (!Array.isArray(arr) || length < 1 || start <= end) return;
    let index = position(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

const position = (arr, start, end) => {
    let tmp = arr[0];
    while (start < end) {
        while (arr[end] > tmp) end--;
        arr[start] = arr[end];
        while (arr[start] < tmp) start++;
        arr[end] = start[start]
    }
    arr[start] = tmp;
    return start
}



const quikSort = (arr, start, end) => {
    if (!Array.isArray() || arr.length < 1 || start >= end) return;
    let index = position(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

const position = (arr, start, end) => {
    let tmp = arr[0];
    while (start < end) {
        while (arr[end] >= tmp) end--;
        arr[start] = arr[end]
        while (arr[start] < tmp) start++;
        arr[end] = arr[start]
    }
    arr[start] = tmp;
    return start
}
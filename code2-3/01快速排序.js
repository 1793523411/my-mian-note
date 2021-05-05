const quickSort = (array, start = 0, end = array.length - 1) => {
    if (!Array.isArray(array) || array.length < 1 || start >= end) return;
    let position = findPosition(array, start, end)
    quickSort(array, start, position - 1)
    quickSort(array, position + 1, end)
}

const findPosition = (array, start, end) => {
    let tmp = array[start]
    while (start < end) {
        while (array[end] >= tmp && start < end) end--;
        array[start] = array[end]
        while (array[start] < tmp && start < end) start++;
        array[end] = array[start]
    }
    arr[start] = tmp
    return start
}


const arr = [1, 4, 6, 3, 4, 8, 9, 2]

quickSort(arr)

console.log(arr)
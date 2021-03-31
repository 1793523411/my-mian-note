const quicksort = (arr, start = 0, end = arr.length - 1) => {
    if (Array.isArray(arr) || arr.length < 1 || start >= end) return
    let index = position(arr, start, end)
    quicksort(arr, 0, index - 1)
    quicksort(arr, index + 1, end)
}

const position = (arr, start, end) => {
    let tmp = arr[0]
    while (start < end) {
        while (arr[start] <= arr[end] && start < end) end--;
        arr[end] = arr[start]
        while (arr[start] > arr[end] && start < end) start++;
        arr[start] = arr[end]
    }
    arr[start] = tmp
    return start
}
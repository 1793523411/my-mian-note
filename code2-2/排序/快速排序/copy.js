const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (!Array.isArray(arr) || arr.length <= 1 || left > right) return;
    let index = position(arr, left, right)
    quickSort(arr, 0, index - 1)
    quickSort(arr, index + 1, arr, end)
}

const position = (arr, left, right) => {
    let tmp = arr[0]
    while (left <= right) {
        while (arr[right] >= tmp && left < right) right--;
        arr[left] = arr[right]
        while (arr[left] < tmp && left < right) left++;
        arr[right] = arr[left]
    }
    arr[left] = tmp;
    return left
}
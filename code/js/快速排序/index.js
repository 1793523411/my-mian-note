
function quickSort(array, start, end) {
    let length = array.length;
    if (!Array.isArray(array) || length <= 1 || start > end) return
    let index = partition(array, start, end)
    quickSort(array, start, index - 1)
    quickSort(array, index + 1, end)
}

function partition(array, start, end) {
    let pivot = array[start];
    while (start < end) {
        while (array[end] >= pivot && start < end) end--;
        array[start] = array[end]
        while (array[start] < pivot && start < end) start++;
        array[end] = array[start]
    }
    array[start] = pivot;
    return start
}
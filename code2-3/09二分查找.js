const bianchSearch = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let min = Math.floor(i + (j - i) / 2)
        if (arr[min] > target) {
            j = min - 1
        } else if (arr[min] < target) {
            i = min + 1
        } else {
            return min
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 67, 78]

console.log(bianchSearch(arr, 79))
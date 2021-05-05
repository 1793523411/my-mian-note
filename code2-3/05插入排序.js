const insertSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
            j--;
        }
    }
}

const insertSort2 = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let tmp = arr[i]
        while (j - 1 >= 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = tmp
    }
}

const arr = [1, 4, 6, 3, 4, 8, 9, 2]

insertSort2(arr)

console.log(arr)
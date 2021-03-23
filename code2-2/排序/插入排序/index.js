const insertSort = (arr) => {
    if (!Array.isArray(arr) || arr.length < 1) return;
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i]
        while (j - 1 >= 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--;
        }
        arr[j] = tmp
    }
}
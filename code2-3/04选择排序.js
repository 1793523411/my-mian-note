const selectSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) min = j
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
}

const arr = [1, 4, 6, 3, 4, 8, 9, 2]

selectSort(arr)

console.log(arr)
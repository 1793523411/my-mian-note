const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(arr)

function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length < 1) return
    let sign;
    for (let i = 0; i < arr.length; i++) {
        sign = true
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                sign = false
            }
        }
        if (sign) break
    }
}

bubbleSort(arr)

console.log(arr)
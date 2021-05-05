// const bubblSort = (arr) => {
//     if (!Array.isArray(arr) || arr.length <= 1) return;
//     let sign
//     for (let i = 0; i < arr.length; i++) {
//         sign = false
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] < arr[j - 1]) {
//                 sign = true;
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//             }
//         }
//         if (!sign) break;
//     }
// }

const bubbleSort2 = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) {
        let flag = true;
        let k = lastIndex;
        for (let j = 0; j < k; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                lastIndex = j;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (flag) break
    }
}

const arr = [1, 4, 6, 3, 4, 8, 9, 2]

bubbleSort2(arr)

console.log(arr)
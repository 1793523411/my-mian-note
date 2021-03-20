// const binarySearch = (arr, target) => {
//     console.log(arr)
//     let right = arr.length - 1;
//     let left = 0;
//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
//         if (target < arr[mid]) {
//             right = mid - 1;
//         } else if (target > arr[mid]) {
//             left = mid + 1;
//         } else {
//             return mid
//         }
//     }
//     return -1
// }
const binarySearch = (arr, target) => {
    console.log(arr)
    let right = arr.length;//!
    let left = 0;
    while (left < right) { //!
        let mid = Math.floor(left + (right - left) / 2)
        if (target < arr[mid]) {
            right = mid; //!
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            return mid
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))
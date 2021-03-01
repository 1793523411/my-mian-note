var a = [1, [2, [3, 4, 5]]]

// function flatten(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// function flatten(arr) {
//     return arr.reduce(function (pre, next) {
//         return pre.concat(Array.isArray(next) ? flatten(next) : next)
//     }, [])

// }
// function flatten(arr) {
//     while (arr.some((ietm) => Array.isArray(ietm))) {
//         arr = [].concat(...arr)//
//         console.log(arr)
//     }
//     return arr
// }
// function flatten(arr) {
//     console.log(arr.toString())
//     return arr.toString().split(",")
// }
// function flatten(arr) {
//     return arr.flat(Infinity)
// }
function flatten(arr) {
    let str = JSON.stringify(arr)
    str = str.replace(/(\[|\])/g, "")
    str = "[" + str + "]"
    return JSON.parse(str)
}



console.log(flatten(a))
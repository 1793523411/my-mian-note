// var a = {
//     i: 1,
//     toString() {
//         return a.i++
//     }
// }
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1)
// }

var a = [1,2,3]
a.toString = a.shift;
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}
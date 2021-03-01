// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }
// for (var i = 1; i <= 5; i++) {
//     (
//         function (i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, 1000);
//         }
//     )(i)

// }

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function(i){
//         console.log(i)
//     }, 0,i);
// }


const book = (function () {
    var page = 100;
    return function () {
        this.author = "ygj";
        this._page = function () {
            console.log(page)
        }
    }
})()

var a = new book()
console.log(a.author)
console.log(a.page)
a._page()
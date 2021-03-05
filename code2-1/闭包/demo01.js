// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

// for (var i = 1; i <= 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000);
//     })(i)
// }

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function (i) {
//         console.log(i)
//     }, 0, i);
// }

function* test() {
    for (let i = 1; i <= 5; i++) {
        // setTimeout(() => {
        yield i;
        // }, 1000);
    }
}


// function* test() {
//     let i = 0
//     while (true) {
//         yield i;
//         i++
//     }
// }
// let gen = test()

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(gen.next().value)
//     }, 1000);

// }

async function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

async function foo() {
    // const t0 = Date.now();
    // await sleep(1500)
    // console.log(Date.now() - t0)

    for (var i = 0; i <= 5; i++) {
        await sleep(1000)
        console.log(i)
    }
}

foo()


const book = (function () {
    var page = 100;
    return function () {
        this.author = "ygj";
        this._page = function () {
            console.log(page)
        }
    }
})()

var a = new book();
console.log(a.page)
console.log(a.author)
a._page()
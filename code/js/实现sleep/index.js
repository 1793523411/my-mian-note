// function sleep(delay) {
//     var start = (new Date()).getTime();
//     while ((new Date()).getTime() - start < delay) {
//         continue;
//     }
// }
// sleep(2000);
// console.log('2秒后输出')


// async function sleep(delay) {
//     return new Promise((resolve) => setTimeout(resolve, delay))
// }

// async function foo() {
//     const t0 = Date.now()
//     await sleep(1500)
//     console.log(Date.now() - t0)
// }

// foo()


// async function randomDelay(id) {
//     const delay = Math.random() * 1000;
//     return new Promise((resolve) => setTimeout(() => {
//         console.log(`${id} finish`)
//         resolve()
//     }, delay))
// }


// async function foo() {
//     const t0 = Date.now()
//     for (let i = 0; i < 10; i++) {
//         await randomDelay(i)
//     }
//     console.log(`${Date.now() - t0}ms elapsed`)
// }

// foo()

//每秒打印一个数字

async function foo(i){
    return new Promise(resolve => setTimeout(() => {
        console.log(i)
        resolve(i)
    }, 1000))
}

async function bar(){
    for(let i = 0; i<10;i++){
        await foo(i)
    }
}

bar()
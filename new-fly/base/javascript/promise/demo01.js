new Promise((resolve, reject) => {
    console.log("start")
    setTimeout(() => {
        resolve({ test: 1 })
        resolve({ test: 2 })
        reject({ test: 3 })
    }, 2000);
}).then((data) => {
    console.log("result:", data)
}, (data1) => {
    console.log("resulr2:", data1)
}).then((data) => {
    console.log("result3:", data)
})


setTimeout(() => {
    console.log("settime")
}, 1000);

new Promise((resolve, reject) => {
    console.log("promise1")
    resolve(1)
}).then(res => {
    console.log(res)
})
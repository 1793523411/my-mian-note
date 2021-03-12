const fs = require('fs')
const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }).then(res => res)
}

const gen = async function () {
    const data1 = await readFilePromise('./1.txt')
    console.log(data1?.toString());
    const data2 = await readFilePromise('./2.txt');
    console.log(data2?.toString())
}

gen()
console.log(gen()) //Promise { <pending> }
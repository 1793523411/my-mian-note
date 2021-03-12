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
const gen = function* () {
    const data1 = yield readFilePromise('./1.txt');
    console.log(data1?.toString());
    const data2 = yield readFilePromise('./2.txt');
    console.log(data2?.toString())
}


function run(gen) {
    const next = (err, data) => {
        let res = gen.next(data);
        if (res.done) return;
        res.value.then(next)
    };
    next()
}

let g = gen();

run(g)
const readFileThunk = (filename) => {
    return (callback) => {
        fs.readFile(filename, callback)
    }
}

const gen = function* () {
    const data1 = yield readFileThunk('1.txt')
    console.log(data1.toString());
    const data2 = yield readFileThunk('2.txt');
    console.log(data2.toString())
}

let g = gen()

g.next().value((err, data1) => {
    g.next(data1).value((err, data2) => {
        g.next(data2)
    })
})

function run(gen) {
    const next = (err, data) => {
        let res = gen.next(data)
        if (res.done) return;
        res.value(next)
    }
    next()
}

const readFileThunk = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        }).then(res => res)
    })
}

function run(gen) {
    const next = (err, data) => {
        let res = gen.next(data)
        if (res.done) return;
        res.value.then(next)
    }
}

run(g)

function* gen() {
    const data1 = yield readFileThuk('1.txt')
    console.log(data1.toString())
    const data2 = yield readFileThuk('2.txt')
    console.log(data2.toString())
}

function readFileThunk(filename) {
    return (callback) => {
        fs.readFile(filename, callback)
    }
}

function run(gen) {
    function next(err, data) {
        let res = gen.next(data)
        if (res.done) return
        res.value(next)
    }
    next()
}

g.next().value((err, data1) => {
    g.next(data1).value((err, data2) => {
        g.next(data2)
    })
})


function readFileThuk(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

g.next().then((err, data1 => {
    g.next(data1).then((err, data2) => {
        g.next(data2)
    })
}))
function run(gen) {
    function next(err, data) {
        let res = gen.next(data)
        if (done) return;
        res.value().then(next)
    }
    next()
}

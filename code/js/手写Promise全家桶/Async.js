const { info } = require("node:console");

constfetchData = (data) => new Promise((resolve) => setTimeout(resolve, 1000, data + 1))

const fetchResult = async function () {
    var result1 = await fetchData(1);
    var result2 = await fetchData(result1);
    var result3 = await fetchData(result2);
    console.log(result3);
}

fetchResult();

function myAync(generatorFn) {
    return function () {
        let gen = generatorFn.apply(this, arguments)
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg)
                    var value = info.value
                } catch (error) {
                    reject(error)
                    return;
                }
                if (info.done) {
                    resolve(value)
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step('next', value)
                    }, function (err) {
                        step('throw', err)
                    })
                }
            }
            return step('next')
        })
    }
}
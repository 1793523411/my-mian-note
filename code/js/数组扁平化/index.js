let arr = []

//递归
function fn(arr) {
    let arr1 = []
    arr.forEach(val => {
        if (val instanceof Array) {
            arr1 = arr1.concat(fn(arr1))
        } else {
            arr1.push(val)
        }
    });
    return arr1
}

//reducs实现

function fn2(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? fn(cur) : cur)
    })
}

//flat

arr.flat(Infinity)

//扩展运算符

function fn3(arr) {
    let arr1 = []
    let bStop = true;
    arr.forEach(val => {
        if (Array.isArray(val)) {
            arr1.push(...val)
            bStop = false
        } else {
            arr1.push(val)
        }
    });
    if (bStop) {
        return arr1
    }
    return fn(arr1)
}

//toString

let arr1 = arr.toString().split(",").map(val => {
    return parseInt(val)
})

//apply

function fn4() {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat.apply([], arr)
    }
    return arr
}
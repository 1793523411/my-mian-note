function flatten(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

function flatten(arr) {
    return arr.reduce(function (per, next) {
        return pre.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

function flatter(arr) {
    return arr.toString().split(',')
}

function flatter(arr) {
    return arr.flat(Infinity)
}

function flatter(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, "")
    return JSON.parse(`[${str}]`)
}


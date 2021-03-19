const arr = [1, 2, 3, 4, 5, 5, 6, 8, 7, 10]

const demo01 = (arr) => {
    return [...new Set(arr)]
}

const demo02 = (arr) => {
    let map = new Map()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            continue
        } else {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}

const demo03 = (arr) => {
    arr.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            res.push(arr[i])
        } else {
            if (arr[i] === arr[i - 1]) continue;
            res.push(arr[i])
        }
    }
    return res
}

const demo04 = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) res.push(arr[i])
    }
    return res
}

console.log(demo04(arr))
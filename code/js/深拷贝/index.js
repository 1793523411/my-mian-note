function deepCopy(obj) {
    if (typeof obj == "object") {
        var result = obj.constructor = Array ? [] : {};
        for (let i in obj) {
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i]
        }
    } else {
        var result = obj;
    }
    return result
}


let o1 = {
    a: {
        b: 1
    }
}
let o2 = JSON.parse(JSON.stringify(o1))

function deepCopy(s) {
    const d = {}
    for (let k in s) {
        if (typeof s[k] == "object") {
            d[k] = deepCopy(s[k])
        } else {
            d[k] = s[k]
        }
    }
    return d
}
function deepCopy(obj, map = new Map()) {
    if (obj.constructor === Date) return new Date(obj)
    if (obj.constructor === RegExp) return new RegExp(obj)
    let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
    if (map.has(obj)) return map.get(obj)
    map.set(obj, clone)
    for (const item of Reflect.ownKeys(obj)) {
        if (typeof obj[item] === "object" && obj !== null) {
            clone[item] = deepCopy(obj[item], map)
        } else {
            clone[item] = obj[item]
        }
    }
    return clone
}

const shallowCopy = (obj) => {
    if (typeof obj !== 'object' && obj !== null) {
        let res = Array.isArray(obj) ? [] : {}
        for (let item in obj) {
            if (obj.hasOwnProperty(item)) {
                res[item] = obj[item]
            }
        }
        return res
    } else {
        return obj
    }

}

const obj = {
    a: 1,
    b: {
        c: {
            d: 3
        }
    }
}

const shollowCopy = shallowCopy(obj)
const deepCopy2 = deepCopy(obj)

console.log(obj.b.c === shollowCopy.b.c)
console.log(obj.b.c === deepCopy2.b.c)
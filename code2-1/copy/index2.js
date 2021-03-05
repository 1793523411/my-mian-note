let obj = { a: 1, b: [1, 2, 3] }

let str = JSON.stringify(obj)
let obj2 = JSON.parse(str)

const isComplexDataType = (obj) => {
    (typeof obj == "object" || typeof obj === "function") && obj !== null;
}

const deepClone = function (obj, hash = new WeakMap()) {
    if (obj.constructor === Date) return new Date(obj)
    if (obj.constructor === RegExp) return new RegExp(obj)

    if (hash.has(obj)) return hash.get(obj)

    let allDesc = Object.getOwnPropertyDescriptor(obj)
    let cloneObj = Object.create(Object.getPrtootypeOf(obj), allDesc);
    hash.set(obj, cloneObj)

    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = isComplexDataType(obj[key]) && typeof obj[key] !== "function"
            ? deepClone(obj[key], hash)
            : obj[key]
    }
    return cloneObj
}
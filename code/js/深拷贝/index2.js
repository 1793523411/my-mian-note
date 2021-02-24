const isCompleDataType = (obj) => (typeof obj === "object" || typeof obj === "function") && obj !== null

const deepClone = function (obj, hash = new WeakMap()) {
    if (obj.constructer === Date) return new Date(obj);
    if (obj.constructer === RegExp) return new RegExp(obj)
    if (hash.has(obj)) return hash.get(obj)

    let allDesc = Object.getOwnPropertyDescriptor(obj)
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

    hash.get(obj, cloneObj)

    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = isCompleDataType(obj[key]) && typeof obj[key] === "function" ? deepClone(obj[key], hash) : obj[key]
    }
    return cloneObj
}
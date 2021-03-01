let obj1 = { a: 1, b: [1, 2, 3] }

let str = JSON.stringify(obj1)
let obj2 = JSON.parse(str)
console.log(obj2)

obj1.a = 2

obj1.b.push(4)

console.log(obj1)
console.log(obj2)


const isComplexDataType = (obj) => {
    (typeof obj === "object" || typeof obj === "function") && obj !== null
}

const deeClone = function (obj, hash = new WeakMap()) {
    if (obj.constructor === Date) return new Date(obj);
    if (obj.constructor === RegExp) return new RegExp(obj)

    if (hash.has(obj)) return hash.get(obj)

    let allDesc = Object.getOwnPropertyDescriptor(obj)
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
    hash.set(obj, cloneObj)

    for (let key of Reflect.ownKeys(obj)) {
        cloneObj[key] = isComplexDataType(obj[key]) && typeof obj[key] !== "function" ? deeClone(obj[key], hash) : obj[key]
    }
    return cloneObj;
}
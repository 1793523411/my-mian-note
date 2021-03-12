let isType = (type) => {
    return (obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

let isString = isType("String")
let isArray = isType("Array")

console.log(isString("123"))
console.log(isArray([1, 2, 3]))


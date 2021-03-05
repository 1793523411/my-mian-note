const { versions } = require("process")

const json = '{"result":true,"count":2}'

const obj = JSON.parse(json)

console.log(obj)

const obj2 = JSON.parse(json, (k, v) => {
    if (typeof v === "number") return v * 2
    return v
})

console.log(obj2)

function replace(key, value) {
    if (typeof value === "string") {
        return undefined
    }
    return value
}
var foo = {
    fondation: "MAIKL",
    model: "box",
    week: 4,
    tranport: "ora",
    month: 7
}

console.log(JSON.stringify(foo, replace," "))
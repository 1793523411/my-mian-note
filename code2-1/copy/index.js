let target = {}
let target2 = {}

let source = {
    a: {
        b: [1, 2]
    }
}

Object.assign(target, source)
Object.assign(target2, source)

let obj = {
    a: 1,
    b: {
        c: 1
    }
}

let obj2 = { ...obj }

let add = [1, 2, 3];
let newAdd = [...add]

let arr = [1, 2, 3]
let newArr = [].concat(arr)

let arr = [1, 2, 3, { value: 4 }]
let newArr = arr.slice()

const shallowClone = (target) => {
    if (typeof target === "object" && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop]
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
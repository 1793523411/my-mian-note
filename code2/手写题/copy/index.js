// let target = {}
// let target2 ={}
// let source = {
//     a: {
//         b: [1,2]
//     }
// }

// Object.assign(target, source)
// Object.assign(target2, source)

// target2.a.b.push(3) 
// console.log(target)

// let obj1 = { a: { b: 1 }, sym: Symbol(1) }

// Object.defineProperty(obj1, "innumerable", {
//     value: 'no',
//     enumerable: false
// })

// let obj2={}

// Object.assign(obj2,obj1)

// obj1.a.b = 2

// console.log(obj1)
// console.log(obj2)



// let obj = {
//     a: 1,
//     b: {
//         c: 1
//     }
// }

// let obj2 = { ...obj }

// obj.a = 2
// console.log(obj2)

// obj.b.c = "bbb"

// console.log(obj2)

// let arr = [1,2,3]
// let newArr=[...arr]


// let arr = [1, 2, 3]

// let newArr = arr.concat()

// console.log(newArr)


// let arr = [1, 2, { value: 4 }]

// let newArr = arr.slice()

// console.log(newArr)

// newArr[2].value = 999

// console.log(arr)


const shallowClone = (target) => {
    if (typeof target === "object" && target === null) {
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


let arr = [1, 2, { value: 4}]

console.log(shallowClone(arr))
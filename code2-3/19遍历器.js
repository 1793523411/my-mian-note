function iterator(arr) {
    let index = 0
    let len = arr.length
    return {
        next: function () {
            return index < len ? { val: arr[index++], done: false }
                : { val: undefined, done: true }
        }
    }
}

let arr = [1, 2, 3, 4]
let obj = iterator(arr)
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())

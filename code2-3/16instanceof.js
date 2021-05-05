const myInstance = (l, r) => {
    if(typeof r !== Object || r === null) return false
    let proto = r.prototype;
    let left = Object.getPrototypeOf(l)
    while (true) {
        if (left === proto) return true;
        if (!left) return false
        left = Object.getPrototypeOf(left)
    }
}


let arr = []
let num = 1

console.log(myInstance(arr, Object))
console.log(myInstance(num, Object))
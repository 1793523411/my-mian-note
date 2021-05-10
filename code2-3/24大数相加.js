const addd = (num1, num2) => {
    let arr1 = num1.split("")
    let arr2 = num2.split("")
    let res = ""
    let cur = 0;
    while (arr1.length || arr2.length) {
        let tmp = +arr1.pop() + +arr2.pop() + cur
        res = (tmp % 10) + res;
        cur = Math.floor(tmp / 10)
    }
    return res;
}

let num1 = "126"
let num2 = "345"

console.log(addd(num1, num2))
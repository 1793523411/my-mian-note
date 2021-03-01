function myinstanceof(left, right) {
    if (typeof left !== "object" || left === null) return false
    let L = Object.getPrototypeOf(left)
    let R = right.prototype
    while (true) {
        if (!L) return false;
        if (L === R) return true;
        L = Object.getPrototypeOf(L)
    }
}
// console.log(myinstanceof({}, Object))





//left instanceof right -> true/false

function myIstaceof(left, right) {
    if (typeof left !== "object" || left === null) return false;
    let L = Object.getPrototypeOf(left)
    let R = right.prototype;
    while (true) {
        if (!L) return false;
        if (L === R) return true;
        L = Object.getPrototypeOf(L);
    }
}


console.log(myIstaceof({}, Array))
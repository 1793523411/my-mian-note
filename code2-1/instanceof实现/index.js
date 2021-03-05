function myinstanceof(left, right) {
    if (typeof left !== "object" || left === null) return false;
    let L = Object.getPrototypeOf(left)
    let R = right.proto;
    while (true) {
        if (!L) return false;
        if (L === R) return true;
        L = Object.getPrototypeOf(L)
    }
}

function myInstance(left, right) {
    if (typeof left !== "object" || left === null) return false;
    let L = Object.getPrototypeOf(left)
    let R = right.prototyoe;
    while (true) {
        if (!L) return false;
        if (L === R) return false;
        L = Object.getPrototypeOf(L)
    }
}
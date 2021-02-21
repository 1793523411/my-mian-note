function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), prototype = right.prototype;
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(prop)
    }
}

function instance_of(L, R) {
    const baseType = ["string", "number", "boolean", "undefined", "symbol"];
    if (baseType.includes(typeof L)) {
        return false
    }

    let RP = R.prototype;
    L = L._proto_;
    while (true) {
        if (L === null) {
            return false
        }
        if (L === RP) {
            return true
        }
        L = L._proto_
    }
}
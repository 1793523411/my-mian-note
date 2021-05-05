function myNew(func, ...args) {
    if (typeof func !== 'function') {
        throw new Error('error')
    }
    // let obj = create(func.prototype)
    let obj = Object.create(func.prototype)
    let res = func.apply(obj, args)
    console.log(obj)
    let isObj = typeof res === "object" && res !== null;
    let isfunc = typeof res === "function"

    return isObj || isfunc ? res : obj
}

function person(c) {
    this.a = 1;
    this.b = 2;
    this.c = c
    // return {a:1}
}

let obj = myNew(person, 3)
console.log(obj)

/**
 * 1.创建一个对象
 * 2.将对象的__proto指向传入的参数
 * 3.返回这个对象
 * 
 * 使用构造函数来实现上面三步操作
 */
function create(proto) {
    function F() { }
    F.prototype = proto
    return new F()
}

let obj2 = new person(3)
console.log(obj2)
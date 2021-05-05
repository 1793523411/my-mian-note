function Super() {
    this.age = 20;
    this.arr = [1, 2, 3]
}

// Super.saySup = function(){
//     console.log('Super')
// }

Super.prototype.proSup = function () {
    console.log('prototype Super')
}

function Suber() {
    Super.call(this)
    this.age = 200;
}


// Suber.prototype = Super.prototype
Suber.prototype = new Super()


let obj = new Suber()
let obj2 = new Suber()

obj.saySub = function () {
    console.log('sub')
}

// obj.saySup()
obj.proSup()
console.log(obj.arr)
obj2.arr.push(111)
console.log(obj.arr)
console.log(obj.age)
console.log(obj.constructor)

obj.saySub()



//-----------------------------


function Super() {
    this.age = 20
    this.arr = [1, 2, 3]
}

Super.prototype.saySuper = function () {
    console.log('super prototype')
}

function Suber() {
    Super.call(this)
    this.age = 200
}

function work(Sub, Sup) {
    let obj = Object.create(Sup.prototype)
    Sub.prototype = obj
    obj.constructor = Sub
}

work(Suber,Super)

let obj01 = new Suber()
let obj02 = new Suber()

obj01.saySuper()
console.log(obj01.age)

obj02.arr.push(1111)
console.log(obj01.arr)
console.log(obj02.arr)

console.log(obj01.constructor)
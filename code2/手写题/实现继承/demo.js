function SuperType(name){
    this.name = name;
    this.color = ["red","green","blue"]
}

SuperType.prototype.sayName = function(){
    console.log(this.name)
}

function SubType(name,age){
    SuperType.call(this,name)
    this.age = age
}

function inherit(subType,superType){
    let prototype = Object.create(superType.prototype)
    prototype.constructor = subType;
    subType.prototype = prototype
}

inherit(SubType,SuperType)

SubType.sayage= function(){
    console.log(this.age)
}


let instance1 = new SubType("ygj",20)
instance1.color.push("yellow")
console.log(instance1.color)
let instance2 = new SubType("ygj222",22)
console.log(instance2.color)

// instance1.sayName()
instance1.sayage()
// instance2.sayName()


function SuperType(name){
    this.name = name;
    this.color = ["ren","green","blue"]
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

SubType.sayage = function(){
    console.log(this.age)
}

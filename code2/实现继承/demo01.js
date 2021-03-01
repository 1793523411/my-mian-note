//原型链继承

function SuperType(){
    this.property = true
}

SuperType.prototype.getSuperValue = function(){
    return this.property
}

function SubType(){
    this.subPrototype = false;
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function(){
    return this.subPrototype
}

let instace= new SubType()

console.log(instace.getSuperValue())




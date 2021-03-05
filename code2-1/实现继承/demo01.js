function SuperType(){
    this.prototype = true;
}

SuperType.prototype.getSuperVale = function(){
    return this.prototype
}

function SubType(){
    this.subPrototype = false
}

SubType.prototype = new SuperType()

SubType.prototype.getSuperVale = function(){
    return this.subPrototype
}
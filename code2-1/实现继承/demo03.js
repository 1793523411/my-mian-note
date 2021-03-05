function SuperType(name) {
    this.name = name;
    this.color = ["red", "green"]
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}

function SubType(name, age) {
    SubType.call(this, name)
    this.age = age
}

SubType.prototype = SuperType.prototype

SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function () {
    console.log(this.age)
}


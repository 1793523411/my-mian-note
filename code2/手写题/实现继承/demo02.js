function SuperType(){
    this.color = ["red","green"]
}

SuperType.prototype.getColor = function(){
    return this.color
}

function SubType(){
    SuperType.call(this)
}

let instance = new SubType()

instance.color.push("blue")

console.log(instance.color)

let insance2 = new SubType()

console.log(insance2.color)
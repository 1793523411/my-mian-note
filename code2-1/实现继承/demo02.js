function SuperType() {
    this.color = ["red", "green"]
}
SuperType.prototype.getColor = function () {
    return this.color
}

function SubType() {
    SuperType.call(this)
}
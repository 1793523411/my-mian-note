function Super() {
    this.superName = 'super'
    this.superArr = [1, 2, 3, 4]
}

Super.prototype.hello = function () {
    console.log(this.superName)
}

function Suber() {
    this.subName = 'suber';
    this.suberArr = [1, 2, 3, 4]
    Super.call(this)
}

Suber.prototype.helloSub = function () {
    console.log('hello~ sub')
}

let sub1 = new Suber()
let sub2 = new Suber()

sub1.suberArr.push(999)
sub1.superArr.push(999)

console.log(sub1)
console.log(sub2)

sub1.helloSub()
sub1.hello()

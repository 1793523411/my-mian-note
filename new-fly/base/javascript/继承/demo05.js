function Super() {
    this.superName = 'super'
    this.superArr = [1, 2, 3, 4]
}

Super.prototype.suphello = function () {
    console.log('suphello~~~')
}

function Suber() {
    this.subName = 'suber';
    this.suberArr = [1, 2, 3, 4]
    Super.call(this)
}



function work(sub, sup) {
    sub.prototype = Object.create(sup.prototype)
    sub.hello = function () {
        console.log('hello')
    }
}

work(Suber, Super)

Suber.prototype.sayhello = function(){
    console.log('aaa')
}

let sub1 = new Suber()
let sub2 = new Suber()

sub1.suberArr.push(999)
sub1.superArr.push(999)

console.log(sub1)
console.log(sub2)


sub1.suphello()
sub1.sayhello()
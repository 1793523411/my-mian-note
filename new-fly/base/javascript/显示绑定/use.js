function Super() {
    this.a = "aaa";
    this.print = function () {
        console.log(this.a)
    }
}


function Suber() {
    Super.call(this)
    this.print()
}


Suber()


function add(a, b) {
    console.log(this)
    console.log(a + b)
    // return a + b
}

function sub(a, b) {
    return a - b
}


add.bind(sub, 3, 5)()
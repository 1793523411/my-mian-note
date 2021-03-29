function myinstanceof(left, right) {
    let L = Object.getPrototypeOf(left)
    let R = right.prototype;
    while (L) {
        if (L === R) return true
        L = Object.getPrototypeOf(L)
    }
    return false
}

function foo() {

}

let a = new foo()

console.log(myinstanceof(foo, foo))


function Foo() {
}

Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true


/*
            |
    new Foo()    function Foo(){}    Foo.prototype


    new Object()  funtion Object(){}   Object.prototype


                function Function(){}   Function.prototype


*/
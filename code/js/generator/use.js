function* gen1(){
    yield 1;
    yield * gen2()
    yield 3
}

function* gen2(){
    yield 2;
    yield 3;
}

var g = gen1();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

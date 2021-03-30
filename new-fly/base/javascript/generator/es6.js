function* example() {
    yield 1;
    yield 2;
    yield 3;
}
var iter = example();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
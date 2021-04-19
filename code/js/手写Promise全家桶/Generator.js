function* testGenerator() {
    yield '111111'
    yield '222222'
    yield '333333'
}

let gen = testGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function myGenerator(list) {
    let index = 0;
    let len = list.length;
    return {
        next: function () {
            let done = index >= len
            let value = !done ? list[index++] : undefined
            return {
                done: done,
                value: value
            }
        }
    }
}
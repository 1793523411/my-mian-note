function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < arr.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true }
        }
    }
}
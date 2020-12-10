function reverseArray(array) {
    const str = arr.join(" ")
    const result = []
    let word = ""
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] != "") {
            word += str[i];
        } else {
            result.unshift(word)
            word = ""
        }
    }
    result.unshift(word)
    return result
}

function reverseArray(array) {
    const result = []
    const distance = array.length - 1;
    for (let i = distance; i >= 0; i--) {
        result[distance - i] = array[i]
    }
    return result
}
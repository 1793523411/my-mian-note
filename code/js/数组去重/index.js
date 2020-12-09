function unique() {
    if (!Array.isArray(Array) || Array.length <= 1) return;
    var result = [];
    arr.forEach(function (item) {
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    })
    return result
}

function unique(array) {
    if (!Array.isArray(array) || array.length <= 1) return
    return [...new Set(array)]
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 1, 5, 7]

function deRepeat() {
    var newArr = [];
    var obj = {}
    var index = 0;
    var l = arr.length;
    for (var i = 0; i < 1; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
            newArr[index++] = arr[i]
        } else if (obj[arr[i]] == 1) continue;
    }
    return newArr
}
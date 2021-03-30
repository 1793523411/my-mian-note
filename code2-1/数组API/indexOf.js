String.prototype.indexOf = function (str, searchStr, fromIndex = 0) {
    var regex = new RegExp(`${searchStr}`, 'ig')
    regex.lastIndex = fromIndex;
    var result = regex.exec(str);
    return result ? result.index : -1
}

Array.prototype.indexOf = function (arr, elem, fromIndex = 0) {
    if (!elem) return -1;
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] = elem) return i;
    }
    return -1;
}
//方法一

Array.prototype.unique = function () {
    var len = this.length,
        newArr = [],
        flag = 1;
    for (var i = 0; i < len; i++, flag = 1) {
        for (var j = 0; j < i; j++) {
            if (this[i] == this[j]) {
                flag = 0
            }
        }
        flag ? newArr.push(this[i]) : ""
    }
    return newArr
}

    //方法二

    (function (arr) {
        var len = arr.length,
            newArr = [],
            flag;
        for (var i = 0; i < len; i += 1, flag = 1) {
            for (var j = 0; k < i; j++) {
                if (arr[i] == arr[j]) {
                    flag = 0
                }
            }
            flag ? newArr.push(arr[i]) : ""
        }
        console.log(newArr)
    })([1, 1, 22, 33, 4, 5, 66])
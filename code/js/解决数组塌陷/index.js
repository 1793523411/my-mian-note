let arr = []

//使用i--
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        arr.slice(i, 1)
        i--
    }
}

//从数组的末尾一项遍历

for (var i = arr.length; i >= 0; i--) {
    if (arr[i] === 4) {
        arr.splice(i, 1)
    }
}
var num1 = []
for (var i = 0; i < 5; i++) {
    num1[i] = Math.floor(Math.random() * 10) + 1//[1,10]
    for (var j = 0; j < i; j++) {
        if (num1[i] == num[j]) {
            i--
        }
    }
}

//用js实现随机选取某个范围的数，存入数组并排序

var iArray = [];
function getRandom(istart, iend){
    var iChoice = iend - istart + 1;
    return Math.floor(Math.random() * iChoice + istart)
}
for (var i = 0; i < 10; i++) {
    iArray.push(getRandom(10, 100))
}
iArray.sort((a, b) => a - b)
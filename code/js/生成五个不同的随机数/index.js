var num1 = []
for (var i = 0; i < 5; i++) {
    num1[i] = Math.floor(Math.random() * 10) + 1//[1,10]
    for (var j = 0; j < i; j++) {
        if (num1[i] == num[j]) {
            i--
        }
    }
}
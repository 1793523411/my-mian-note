var str = "asdsfdgfdhgjnyuhgnasdfasfdfs"

var json = {}

for (var i = 0; i < str.length; i++) {
    if (!json(str.charAt(i))) {
        json[str.charAt(i)] = 1
    } else {
        json[str.charAt(i)]++
    }
}

var iMax = 0;
var iIndex = ""
for (var i in json) {
    if (json[i] > iMax) {
        iMax = json[i]
        iIndex = i
    }
}

console.log(iIndex, iMax)
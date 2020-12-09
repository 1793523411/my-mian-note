function range() {
    var args = [].slice.call(arguments)
    var str = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ]
    var result = []
    if (args.length > 2) {
        if (typeof args[0] === "number") {
            for (var i = arg[0]; i <= args[1]; i = i + args[2]) {
                result.push(i)
            }
        } else {
            for (var i = str.indexOf(args[0]); i <= str.indexOf(args[1]); i = i + args[2]) {
                result.push(str[i])
            }
        }
    }
    return result
}
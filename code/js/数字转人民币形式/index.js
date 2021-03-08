function format(str) {
    let s = ""
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        s = str[i] + s;
        count++;
        if (count % 3 == 0 && i != 0) {
            s = "," + s
        }
    }
    return s;
}

function format(str) {
    return str.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
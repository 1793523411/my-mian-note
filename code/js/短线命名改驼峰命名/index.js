var string = "get-element-by-tagname"

function combo(msg) {
    var arr = msg.split("-")
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    msg = arr.join("");
    return msg;
}
console.log(combo(string))
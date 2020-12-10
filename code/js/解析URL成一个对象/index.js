String.prototype.urlQueryString = function () {
    var url = this.split("?")[1].split("&"),
        len = url.length;
    this.url = {}
    for (var i = 0; i < len; i++) {
        var cell = url[i].split("="),
            key = cell[0],
            val = cell[1];
        this.url["" + key + ""] = val;
    }
    return this.url;
}

var url = "127.0.0.1?name=123&age=23"
console.log(url.urlQueryString())
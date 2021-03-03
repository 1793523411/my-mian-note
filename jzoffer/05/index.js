const { func } = require("prop-types");

var replaceSpace = function (s) {
    return s.replace(/ /g, "%20")
}

var replaceSpace = function (s) {
    return s.split(" ").join("%20")
}

var replaceSpace = function (s) {
    if (s === "%20") return s
    return encodeURI(s)
}

var replaceSpace = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        res += s[i] === " " ? "%20" : s[i]
    }
    return res
}
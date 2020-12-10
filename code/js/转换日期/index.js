var d = new Date()
var year = d.getFullYear()
var month = d.getMonth() + 1
month = month < 10 ? "0" + month : month;
var day = d.getDate()
day = day < 10 ? "0" + day : day
console.log(year + "-" + month + "-" + day)
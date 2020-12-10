function Parent(name, money) {
    this.name = name;
    this.money = money;
    this.info = function () {
        console.log("姓名:" + this.name + "钱" + this.money)
    }
}

function Children(name) {
    Parent.call(this, name)
    this.info = function () {
        console.log("姓名" + this.name + "钱" + this.money)  //money为undefined
    }
}

var per = new Parent("parent", 8000000000)
var chi = new Children("child")

per.info()
chi.info()
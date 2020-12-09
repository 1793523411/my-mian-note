function myPromise(constructor) {
    let self = this;
    self.status = "pending";
    self.value = undefined
    self.reason = undefined

    function reslove(value) {
        if (self.status === "pending") {
            self.value = value;
            self.status = "resloved"
        }
    }
    function reject(reason) {
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected"
        }
    }
    try {
        constructor(reslove, reject)
    } catch (e) {
        reject(e)
    }
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    switch (self.status) {
        case "resloved":
            onFullfilled(self.value);
            break
        case "rejected":
            onRejected(self.reason);
            break
        default:
    }
}


//test

var p = new myPromise(function (reslove, reject) {
    reslove(1);
})
p.then(function (x) {
    console.log(x)
})

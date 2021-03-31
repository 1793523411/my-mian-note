function Promise(executor) {
    var self = this;
    self.status = 'pending';
    self.onResolvedCallback = [];
    self.onRejectedCallback = []

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            if (self.status === "pending") {
                self.status = 'resolved';
                self.data = value;
                for (var i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value)
                }
            }
        });
    }

    function reject(reasoon) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'reject';
                self.data = reason;
                for (var i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason)
                }
            }
        });
    }

    try {
        executor(resolve, reject)
    } catch (reason) {
        reject(reason)
    }
}


Promise.prototype.then = function (onResolved, onRejected) {
    var self = this;
    var promise2;
    onResolved === typeof onResolved === "function" ? onResolved : (v) => v;
    onRejected === typeof onRejected === "function" ? onRejected : (r) => r;

    if (self.status === "resloved") {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onResolved(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (reaon) {
                    reject(reaon)
                }
            });
        })
    }

    if (self.status === "rejected") {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onRejected(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason)
                }
            });
        })
    }

    if (self.status === "pending") {
        return promise2 = new Promise(function (resolev, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(value)
                    resolvePromise(promise2, x, resolev, reject)
                } catch (r) {
                    reject(r)
                }
            })
            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(reaon)
                    resolvePromise(promise2, x, resolev, reject)
                } catch (r) {
                    reject(r)
                }
            })
        })
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    var then;
    var thenCalledOrThrow = false;
    if (promise2 === x) {
        return reject(new TypeError('Chaning cycle detected for promise'))
    }
    if (x instanceof Promise) {
        if (x.status === 'pending') {
            x.then(function (v) {
                resolvePromise(promise2, v, resolve, reject)
            }, reject)
        } else {
            x.then(resolve, reject)
        }
        return
    }
    if ((x !== null) && ((typeof x === "object") || (typeof x === "function"))) {
        try {
            then = x.then
            if (typeof then === 'function') {
                then.call(x, function rs(y) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return resolvePromise(promise2, y, resolve, reject)
                }, function rj(r) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return reject(r)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            return reject(e)
        }
    } else {
        resolve(x)
    }
}


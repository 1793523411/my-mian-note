function Promise(executor) {
    var self = this;
    self.status = 'pending'
    self.onResolvedCallback = []
    self.onRejectedCallback = []

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'resolved';
                self.data = value;
                for (let i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value)
                }
            }
        });
    }

    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'rejected'
                self.data = reason;
                for (let i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason)
                }
            }
        });
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}


Promise.prototype.then = function (onResolved, onRejected) {
    var self = this;
    var Promise2;
    onResolved = typeof onResolved == 'function' ? onResolved : function (v) {
        return v
    }
    onRejected = typeof onRejected == 'function' ? onRejected : function (r) {
        return r
    }
    if (self.status === 'resolved') {
        return Promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onResolved(self.data)
                    resolvePromise(Promise2, x, resolve, reject)
                } catch (er) {
                    reject(reason)
                }
            });
        })
    }
    if (self.status === 'rejected') {
        return Promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    var x = onRejected(self.data)
                    resolvePromise(Promise2, x, resolve, reject)
                } catch (e) {
                    reject(reason)
                }
            });
        })
    }
    if (self.status === 'pending') {
        return Promise2 = new Promise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(value)
                    resolvePromise(Promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(reason)
                    resolvePromise(Promise2, x, resolve, reject)
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
        return reject(new TypeError('error'))
    }
    if (x instanceof Promise) {
        if (x.status === 'pending') {
            x.then(function (v) {
                resolvePromise(promise2, v, resolve, reject)
            }, reject)
        } else {
            x.then(resolve, reject)
        }
    }
    if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
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
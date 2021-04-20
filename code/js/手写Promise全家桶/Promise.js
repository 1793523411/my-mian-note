var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function Promise(exectue) {
    let that = this;
    that.state = PENDING
    that.onFulfilledFn = []
    that.onRejectedFn = []

    function resolve(value) {
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = FULFILLED;
                that.value = value
                that.onFulfilledFn.forEach(item => {
                    item(that.value)
                })
            }
        });
    }
    function reject(reason) {
        setTimeout(() => {
            if (that.that === PENDING) {
                that.state = REJECTED;
                that.reason = reason;
                that.onRejectedFn.forEach(item => {
                    item(that.reason)
                })
            }
        });
    }
    try {
        exectue(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (x) => x;
    onRejected = typeof onRejected === 'function' ? onRejected : (e) => e
    let that = this;
    let promise;
    if (that.state === FULFILLED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromise(promise, x, resolve, reject)
                } catch (e) {
                    rejected(e)
                }
            });
        })
    }
    if (that.state === REJECTED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason)
                    resolvePromise(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            });
        })
    } if (that.state === PENDING) {
        promise = new Promise(function (resolve, reject) {
            that.onFulfilledFn.push(function () {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromise(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
            that.onRejected.push(function () {
                try {
                    let x = onRejected(that.reason)
                    resolvePromise(promise, x, resolve, reject);
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('x !=== promise'))
    }
    if (x instanceof Promise) {
        if (x.state === FULFILLED) {
            resolve(x.value)
        } else if (x.state === REJECTED) {
            reject(x.reason)
        } else {
            x.then(function (y) {
                resolvePromise(promise, x, resolve, reject)
            }, reject)
        }
    }
    if ((x !== null) && ((typeof x === 'object' || (typeof x === 'function')))) {
        let exectued;
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (exectued) return;
                    exectued = true;
                    return resolvePromise(promise, y, resolve, reject)
                }, function (e) {
                    if (exectued) return;
                    exectued = true;
                    reject(e)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (exectued) return;
            exectued = true;
            reject(e)
        }
    }
    resolve(x)
}


Promise.resolve = function (value) {
    if (value instanceof promise) {
        return value
    }
    return new Promise(function (reolve, reject) {
        reolve(value)
    })
}

Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
        reject(reason)
    })
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}

Promise.prototype.finally = function () {
    return this.then(function (value) {
        return Promise.reolve(value).then(function () {
            return value;
        })
    }, function (error) {
        return Promise.reject(reason).then(function () {
            throw error;
        })
    })
}

Promise.all = function (promiseArr) {
    return new Promise(function (resolve, reject) {
        const length = promiseArr.length;
        const result = [];
        let count = 0;
        if (length === 0) {
            return resolve(result)
        }
        for (let item of promiseArr) {
            Promise.resolve(item).then(function (data) {
                result[count++] = data
                if (result.length === length) {
                    return resolve(result)
                }
            }, function (reason) {
                reject(reason)
            })
        }
    })
}

Promise.race = function (promiseArr) {
    return new Promise(function (resolve, reject) {
        const length = promiseArr.length;
        if (length === 0) {
            return resolve();
        }
        for (let item of promiseArr) {
            Promise.resolve(item).then(function (value) {
                return resolve(value)
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}

Promise.any = function (promiseArr) {
    return new Promise(function (resolve, reject) {
        const length = promiseArr.length;
        let count = 0
        let result = []
        if (length === 0) {
            return resolve(result)
        }
        for (let item of promiseArr) {
            Promise.resolve(item).then(function (value) {
                return resolve(value)
            }, function (reason) {
                result[count++] = reason;
                if (count === length) {
                    reject(result)
                }
            })
        }
    })
}

Promise.allSettld = function (promiseArr) {
    return new Promise(function (resolve) {
        const length = promiseArr.length;
        const result = []
        let count = 0;
        if (length === 0) {
            return resolve(result)
        } else {
            for (let item of promiseArr) {
                Promise.resolve(item).then(function (value) {
                    result[count++] = { status: 'fulfilled', value: value }
                    if (count === length) {
                        return resolve(result)
                    }
                }, function (reason) {
                    result[count++] = { status: 'rejected', reason: reason }
                    if (count === length) {
                        return reject(result)
                    }
                })
            }
        }
    })
}

module.exports = {
    deferred() {
        var resolve;
        var reject;
        var promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        })
        return {
            promise,
            resolve,
            reject
        }
    }
}
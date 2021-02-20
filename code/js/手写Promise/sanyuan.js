class Promise {
    constructor(excutorCallback) {
        this.status = 'pending';
        this.value = undefined;
        this.fulfillAry = [];
        this.rejectedAry = [];

        let resloveFn = result => {
            if (this.status !== 'pending') return
            let timer = setTimeout(() => {
                this.status = 'fulfilled';
                this.value = result;
                this.fulfillAry.forEach(item => item(this.value))
            }, 0)
        }

        let rejectFn = reason => {
            if (status !== 'pending') return
            let timer = setTimeout(() => {
                this.status = 'rejected';
                this.value = reason
                this.rejectedAry.forEach(item => item(this.value))
            });
        }
        try {
            excutorCallback(resloveFn, rejectFn)
        } catch (err) {
            rejectFn(err)
        }
    }

    then(fulfilledCallBack, rejectedCallBack) {
        typeof fulfilledCallBack != 'function' ? fulfilledCallBack = result => result : null;
        typeof rejectedCallBack !== 'function' ? rejectedCallBack = reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        } : null

        return Promise((resolve, reject) => {
            this.fulfillAry.push(() => {
                try {
                    let x = fulfilledCallBack(this.value)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x)
                } catch (err) {
                    reject(err)
                }
            })

            this.rejectedAry.push(() => {
                try {
                    let x = this.rejectedAry(this.value)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    static all(promiseAry = []) {
        let index = 0;
        let result = [];
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promiseAry.length; i++) {
                promiseAry[i].then(val => {
                    index++;
                    result[i] = val;
                    if (index === promiseAry.length) {
                        resolve(result)
                    }
                }, reject)
            }
        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            if (promises.length === 0) {
                return
            } else {
                for (let i = 0; i < promises.length; i++) {
                    promises[i].then(val => {
                        resolve(result);
                        return
                    }, reject)
                }
            }
        })
    }

    static resolve(value) {
        if (value instanceof Promise) return value
        return Promise(resolve => resolve(value))
    }

    static reject(value) {
        return new Promise((resolve, reject) => reject(value))
    }
}
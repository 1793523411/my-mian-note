const { rejects } = require("node:assert");
const { time } = require("node:console");

const throttle = (func, wait = 0, execFirstCall) => {
    let timeout = null;
    let args;
    let firstCallTimestamp;

    function throttled(...arg) {
        if (!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
        if (!execFirstCall || !arg) {
            args = arg
        }
        if (timeout) {
            clearTimeout(timeout)
            timeout = null;
        }

        return new Promise((async (res, rej) => {
            if (new Date().getTime() - firstCallTimestamp > wait) {
                try {
                    const result = await func.apply(this, args)
                    res(result)
                } catch (e) {
                    rej(e)
                } finally {
                    cancel()
                }
            } else {
                timeout = setTimeout(async () => {
                    try {
                        const result = await func.apply(this, args)
                        res(result)
                    } catch (e) {
                        rej(e)
                    } finally {
                        cnacel()
                    }
                }, firstCallTimestamp + wait - new Date().getTime())
            }
        }))
    }
    function cancel() {
        clearTimeout(timeout)
        args = null;
        timeout = null;
        firstCallTimestamp = null;
    }
    function flush() {
        cnacel();
        return func.apply(this, args)
    }
    throttled.cancel = cancel;
    throttle.flush = flush;
}
const debounce = (func, wait = 0) => {
    let timeot = null;
    let args;
    function debounced(...arg) {
        args = arg;
        if (timeout) {
            clearTimeout(timeout)
            timeot = null;
        }
        return new Promise((res, rej) => {
            timeot = setTimeout(() => {
                try {
                    const result = await func.apply(this, args)
                    res(result)
                } catch (e) {
                    rej(re)
                }
            }, wait);
        })
    }

    function cancel() {
        clearTimeout(timeot)
        timeot = null;
    }

    function flush() {
        cancel();
        return func.apply(this, args)
    }
    debounced.cancel = cancel;
    debounced.flush = flush
    return debounced
}
const ipt = document.querySelector('input')

ipt.addEventListener('input', e => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null;
    }
    timeout = setTimeout(() => {
        search(e.target.value).then(res => {

        }, e => {

        })
    }, 500)
})

const debonce = (func, wait = 0) => {
    let time = null;
    let args;

    function debounced(...arg) {
        args = arg;
        if (timeout) {
            clearTimeout(timeout)
            timeout = null;
        }
        return new Promise((resolve, reject) => {
            timeout = setTimeout(() => {
                try {
                    const result = await func.apply(this, args)
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            }, wait);
        })
    }

    function cancel() {
        clearTimeout(timeout)
        timeout = null;
    }

    function flush() {
        cancel();
        return func.apply(this, args)
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
function deepCopy(obj) {
    if (typeof obj == "object") {
        var result = obj.constructor = Array ? [] : {};
        for (let i in obj) {
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i]
        }
    } else {
        var result = obj;
    }
    return result
}


let o1 = {
    a: {
        b: 1
    }
}
let o2 = JSON.parse(JSON.stringify(o1))

function deepCopy(s) {
    const d = {}
    for (let k in s) {
        if (typeof s[k] == "object") {
            d[k] = deepCopy(s[k])
        } else {
            d[k] = s[k]
        }
    }
    return d
}

function deepCopy(targer, cache = new Set()) {
    if (typeof target !== 'object' || cache.has(targer)) {
        return targer
    }
    if (Array.isArray(targer)) {
        targer.map(t => {
            cache.add(t)
            return t
        })
    } else {
        return [Object.keys(targer), ...Object.getOwnPropertySymbols(targer)].reduce((res, key) => {
            cache.add(targer[key])
            res[key] = deepCopy(targer[key], cache)
            return res;
        }, targer.constructor !== Object ? Object.create(targer.constructor.prototype) : {})
    }
}

function deepCopyByHistory(target) {
    const prev = history.state;
    history.replaceState(target, document.title)
    const res = history.state
    history.replaceState(prev, document.title)
    return res
}

async function deepCopyMessageChannel(target) {
    return new Promise(reslove => {
        const channel = new MessageChannel()
        channel.port2.onmessage = ev => reslove(ev.data)
        channel.port1.postMessage(target)
    }).then(data => data)
}
const XMLRequest = (method, url, data, success, fail) => {
    let sendData = ""
    let payload = null;
    for (const item in data) {
        sendData += `&${item}=${data[item]}`
    }
    if (method === "GET") {
        url = sendData ? `${url}?${sendData.slice(1)}` : url
    } else if (method === "POST") {
        payload = JSON.stringify(data)
    }
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            typeof success === "function" && success(JSON.parse(XHR.response))
        } else {
            typeof fail === "function" && fail(XHR)
        }
    }
    XHR.open(method, url, true)
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    XHR.send(payload)
}

const XHRRequest = (params) => {
    let url = params?.url;
    let payload = ""
    let query = ""
    let method = params.method?.method
    let data = params?.data
    if (method === "GET") {
        for (let item in data) {
            query += `&${item}=${data[item]}`
        }
        if (query) {
            query = '?' + query.slice(1)
        }
    } else if (method === "POST") {
        payload = JSON.stringify(data)
    }

    let XHR = new XHRRequest()
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            typeof params?.success === "function" && params?.success(JSON.parse(XHR.response))
        } else {
            typeof params?.fail === "function" && params?.fail(XHR)
        }
    }

    XHR.open(method, url + query, true)

    if (params.process) {
        XHR.addEventListener('progress', params.progress)
    }
    if (params.file) {
        payload = params.file
        XHR.setRequestHeader("Content-type", "application/x-www-from-urlencoded")
    } else {
        XHR.setRequestHeader("Content-type", "application/json")
    }
    if (params?.overtime > 0) {
        XHR.timeout = params.overtime
        XHR.ontimeout = function () {
            XHR.abort()
            typeof params?.timeout === "function" && params.timeout(XHR)
        }
    }
    XHR.send(payload)
}

const fetchRequest = (method, url, data = {}, timeout = 5000) => {
    let payload = null;
    let query = ""
    if (method === "GET") {
        for (let item in data) {
            query += `&${item}=${data[item]}`
        }
        if (query) {
            query = '?' + query.slice(1)
        }
    } else if (method === "POST") {
        payload = JSON.stringify(data)
    }
    return new Promise((resolve, reject) => {
        fetch(url + query, {
            credentials: "include", //https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#%E5%8F%91%E9%80%81%E5%B8%A6%E5%87%AD%E6%8D%AE%E7%9A%84%E8%AF%B7%E6%B1%82
            method: method,
            body: payload,
            mode: cors,
            header: {
                "Content-Type": "application/json"
            },
        }).then(response => {
            return response.json()
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
        setTimeout(reject.bind(this, 'error'), timeout)
    })
}
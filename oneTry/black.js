function ajaxRequest(method, url, data = {}, successFn, failFn) {
    const XHR = new XMLHttpRequest();
    let sendData = ""
    for (let key in data) {
        sendData += `&${key}=${data[key]}`
    }
    switch (method) {
        case 'GET':
            url = sendData ? `${url}?${sendData}` : url
            sendData = null;
            break
        case 'POST':
            if (sendData) {
                sendData = sendData.slice(1)
            }
            break;
    }
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            typeof successFn === 'function' && successFn(XHR.response)
        } else {
            typeof failFn === 'function' && failFn(XHR)
        }
    }
    XHR.open(method, url, true)
    XHR.setRequestHeader("Content-Type", "application/x-www/from-urlencoded")
    XHR.send(sendData)
}
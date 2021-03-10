(function () {
    function ajax(method, url, data, success, fail) {
        const XHR = new XMLHttpRequest();
        let sendData = "";
        for (const key in data) {
            sendData += "&" + key + "=" + data[key]
        }
        switch (method) {
            case 'GET':
                url = sendData ? `${url}?${sendData}` : url
                sendData = null;
                break
            case "POST":
                if (sendData) {
                    sendData = sendData.slice(1);
                }
                break
        }
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) return;
            if (XHR.status === 200 || XHR.status === 304) {
                typeof success === "function" && success(XHR.response)
            } else {
                typeof fail === "function" && fail(XHR)
            }
        }
        XHR.open(method, url, true)
        XHR.setRequestHeader("Content-Type", "application/x-www/from-urlencoded")
        XHR.send(sendData)
    }
})
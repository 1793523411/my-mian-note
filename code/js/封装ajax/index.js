//!fetcch版

function fetchRequest(method, url, data = {}, timeout = 5000) {
    let payload = null
    let query = ""
    if (method === "GET") {
        for (const key in data) {
            query += `&${key}=${data[key]}`
        }
        if (query) {
            query = "?" + query.slice(1)
        }
    } else {
        payload = JSON.stringify(data)
    }

    return new Promise((resolve, reject) => {
        fetch(url + query, {
            credentials: "include",
            mode: 'cors',
            method: method,
            headers: {
                "Content-Type": "xxxx"
            },
            body: payload
        }).then(response => {
            return response.json()
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
        setTimeout(reject.bind(this, 'fetch is timeout'), timeout)
    })
}

function testfetch() {
    fetchRequest('GET', 'http://xxxx', {
        page: 1,
        per_page: 10
    }).then(res => {
        console.log('fetch success', res)
    }).catch(err => {
        console.warn('fetch fail', err)
    })
}

//!XMLHttpRequest版

function ajax(params) {
    if (typeof params !== 'object') return console.log('more parama')
    if (!params.method) return console.log("more get or post")
    if (!params.url) return console.log("more url")
    if (typeof !params.data !== "object") return console.log('object data')

    const XHR = new XMLHttpRequest()
    const method = params.method

    const overtime = typeof params.overtime === "number" ? params.overtime : 0

    let url = params.url
    let payload = null
    let query = ""

    if (method === "GET") {
        for (const key in params.data) {
            query += "&" + key + "=" + params.data[key]
        }
        if (query) {
            query = "?" + query.slice(1)
            url += query
        }
    } else {
        payload = JSON.stringify(params.data)
    }

    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            typeof params.success === "function" && params.success(JSON.parse(XHR.response), XHR)
        } else {
            typeof params.fail === "function" && params.fail(XHR)
        }
    }

    if (params.progress) {
        XHR.addEventListener("progress", params.progress)
    }

    XHR.open(method, url, true)

    if (params.file) {
        payload = params.file
        XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // 默认就是这个，设置不设置都可以
    } else {
        XHR.setRequestHeader("Content-Type", "application/json");

    }

    // 在IE中，超时属性只能在调用 open() 方法之后且在调用 send() 方法之前设置。
    if (overtime > 0) {
        XHR.timeout = overtime;
        XHR.ontimeout = function () {
            console.log("timeout")
            XHR.abort()
            typeof params.timeout === "function" && params.timeout(XHR)
        }
    }
    XHR.send(payload)
}


//!简洁版
(function () {
    function ajax(method, url, data, success, fail) {
        const XHR = new XMLHttpRequest();
        /** 请求参数 */
        let sendData = "";
        // 解析对象传参
        for (const key in data) {
            sendData += "&" + key + "=" + data[key];
        }
        switch (method) {
            case "GET":
                url = sendData ? `${url}?${sendData}` : url;
                sendData = null;
                break;

            case "POST":
                if (sendData) {
                    sendData = sendData.slice(1);
                }
                break;
        }
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) return;
            if (XHR.status === 200 || XHR.status === 304) {
                typeof success === "function" && success(XHR.response);
            } else {
                typeof fail === "function" && fail(XHR);
            }
        }
        XHR.open(method, url, true);
        XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        XHR.send(sendData);
    }
})();
function testXMLHttpRequest版() {
    const error = {
        message: "",
        info: null
    }
    ajax({
        url: "http://che.qihao.lzei.com/api/app/parking",
        method: "POST",
        data: {
            appkey: "e2fb20ea3f3df33310788a4247834c93",
            token: "2a11d6d67a8b8196afbcefbac3e0a573",
            page: "1",
            limit: "7",
            longitude: "113.30764968",
            latitude: "23.1200491",
            sort: "distance",
            order: "asc"
        },
        overtime: 5000,
        success: function (res, response) {
            console.log("请求成功", res);
            console.log("原始响应数据 >>", response);
        },
        fail: function (err) {
            error.message = "接口报错，请看 network";
            error.info = err;
            if (err.response.charAt(0) == "{") {
                error.info = JSON.parse(err.response);
            }
            console.log("请求失败", error);
        },
        timeout: function (info) {
            error.message = "请求超时";
            error.info = info;
            console.log(error);
        },
        progress: function (e) {
            if (e.lengthComputable) {
                let percentComplete = e.loaded / e.total
                console.log("请求进度", percentComplete, e.loaded, e.total);
            }
            console.log(e);
        }
    });
}
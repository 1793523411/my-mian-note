function ajax(params) {
    if (typeof params !== "object") return console.error("ajax 缺少请求传参");
    if (!params.method) return console.error("ajax 缺少请求类型 GET 或者 POST");
    if (!params.url) return console.error("ajax 缺少请求 url");
    if (typeof params.data !== "object") return console.error("请求参数类型必须为 object");

    const XHR = new XMLHttpRequest();
    /** 请求方法 */
    const method = params.method;
    /** 超时检测 */
    const overtime = typeof params.overtime === "number" ? params.overtime : 0;
    /** 请求链接 */
    let url = params.url;
    /** 非`GET`请求传参 */
    let payload = null;
    /** `GET`请求传参 */
    let query = "";

    // 传参处理
    if (method === "GET") {
        // 解析对象传参
        for (const key in params.data) {
            query += "&" + key + "=" + params.data[key];
        }
        if (query) {
            query = "?" + query.slice(1);
            url += query;
        }
    } else {
        // 若后台没设置接收 JSON 则不行 需要跟 GET 一样的解析对象传参
        payload = JSON.stringify(params.data);
    }

    // 监听请求变化
    // XHR.status learn: http://tool.oschina.net/commons?type=5
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) return;
        if (XHR.status === 200 || XHR.status === 304) {
            typeof params.success === "function" && params.success(JSON.parse(XHR.response), XHR);
        } else {
            typeof params.fail === "function" && params.fail(XHR);
        }
    }

    // 判断请求进度
    if (params.progress) {
        XHR.addEventListener("progress", params.progress);
    }

    // XHR.responseType = "json";
    // 是否Access-Control应使用cookie或授权标头等凭据进行跨站点请求。
    // XHR.withCredentials = true;	
    XHR.open(method, url, true);

    // 判断是否上传文件通常用于上传图片，上传图片时不需要设置头信息
    if (params.file) {
        payload = params.file;
        // XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // 默认就是这个，设置不设置都可以
    } else {
        // XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        XHR.setRequestHeader("Content-Type", "application/json");
    }

    // 在IE中，超时属性只能在调用 open() 方法之后且在调用 send() 方法之前设置。
    if (overtime > 0) {
        XHR.timeout = overtime;
        XHR.ontimeout = function () {
            console.warn("XMLHttpRequest 请求超时 !!!");
            XHR.abort();
            typeof params.timeout === "function" && params.timeout(XHR);
        }
    }

    XHR.send(payload);
}


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
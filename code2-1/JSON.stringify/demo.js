function jsonStringify(data) {
    let type = typeof data;
    if (type !== "object") {
        let result = data;
        if (Number.isNaN(data) || data === Infinity) {
            result = "null"
        } else if (type === "function" || type === "undefined" || type === "symbol") {
            return undefined
        } else if (type === 'string') {
            result = '"' + data + '"'
        }
        return String(result)
    } else if (type === "object") {
        if (data === null) {
            return "null";
        } else if (data.toJSON && typeof data.toJSON === "function") {
            return jsonStringify(data.toJSON());
        } else if (data instanceof Array) {
            let result = [];
            data.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || item === 'symbol') {
                    result[index] = "null"
                } else {
                    result[index] = jsonStringify(item)
                }
            })
            result = "[" + result + "]"
            return result.replace(/'/g, '"')
        } else {
            let result = [];
            Object.keys(data).forEach((item, index) => {
                if (typeof item !== 'symbol') {
                    if (data[item] !== undefined && typeof data[item] !== "undefined" && typeof data[item] !== "symbol") {
                        result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                    }
                }
            });
            return ("{" + result + "}").replace(/'/g, '"');
        }
    }
}
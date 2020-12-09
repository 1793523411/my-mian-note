markyun.Event = {
    readyEvent: function (fn) {
        if (fn == null) {
            fn = document
        }
        var oldonload = window.onload;
        if (typeof window.onload != "function") {
            window.onload = fn;
        } else {
            window.onload = function () {
                oldonload();
                fn()
            }
        }
    },

    addEvent: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, function () {
                handler.call(element)
            })
        } else {
            element["on" + type] = handler
        }
    },

    removeEvent: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.datachEvent) {
            element.datachEvent("on" + type, handler)
        } else {
            element["on" + type] = null
        }
    },

    stopPropagation: function (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            ev.cancelBubble = true
        }
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.return = false
        }
    },


    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    getEvent: function (e) {
        var ev = e || window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break
                }
                c = c.caller
            }
        }
        return ev
    }
}
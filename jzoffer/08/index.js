const CQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
}

CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
}

CQueue.prototype.deleteHead = function () {
    if (thie.stack2.length) return this.stack2.pop()
    while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop() || -1
}

const CQueue = function () {
    this.stack = []
}

CQueue.prototype.appendTail = function (value) {
    let tmpStack = [];
    let val;
    while ((val = this.stack.pop())) {
        tmpStack.push(val)
    }
    tmpStack.push(value)
    while ((val = tmpStack.pop())) {
        this.stack.push(val)
    }
    return null
}

CQueue.prototype.deleteHead = function () {
    if (!this.stack.length) {
        return -1
    }
    return this.stack.pop()
}
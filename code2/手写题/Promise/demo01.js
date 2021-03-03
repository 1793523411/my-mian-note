const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function Proimise(excute) {
    let self = this;
    self.state = PENDING;
    function resolve(value) {
        if (self.state === PENDING) {
            self.state = FULFILLED;
            self.value = value
        }
    }

    function reject(reason) {
        if (self.state = PENDING) {
            self.state = REJECTED;
            self.reason = reason
        }
    }

    try {
        excute(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Proimise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : function (x) {
        return x
    }
    onRejected = typeof onRejected === "function" ? onRejected : function (e) {
        return e
    }
    
    let self = this;
    switch(self.state){
        case FULFILLED:
            setTimeout(function(){
                onFulfilled(self.value)
            })
            break;
        case REJECTED:
            setTimeout(function(){
                onRejected(self.reason)
            })
            break;
        case PENDING:
            break;
        
    }
}
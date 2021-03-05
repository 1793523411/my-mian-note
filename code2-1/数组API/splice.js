Array.prototype.splice = function (startIndex, deleteCount, ...addElements) {
    let argmentsLen = arguments.length;
    let array = Object(this);
    let len = array.length;
    let deleteArr = new Array(deleteCount)

    startIndex = computeStartIndex(startIndex, len)
    deleteCount = computeDeleteCount(startIndex, len, deleteCount, argmentsLen)

    if (Object.isSealed(array) && deleteCount !== addElements.length) {
        throw new TypeError('the object is a sealed object')
    } else if (Object.isFrozen(array) && (deleteCount > 0 || addElements.length > 0)) {
        throw new TypeError('the object is a frozen object')
    }

    sliceDeleteElements(array, startIndex, deleteCount, deleteArr);

    movePostElements(array, startIndex, len, deleteCount, addElements)

    for (let i = 0; i < addElements.length; i++) {
        array[startIndex + 1] = addElements[i]
    }
    array.length = len - deleteCount + addElements.length
    return deleteArr;
}

const sliceDeleteElements = (array, startIndex, deleteCount, deleteArr) => {
    for (let i = 0; i < deleteCount; i++) {
        let index = startIndex + i;
        if (index in array) {
            let current = array[index];
            deleteArr[i] = current
        }
    }
}

const movePostElements = (array, startIndex, len, deleteCount, addElements) => {
    if (deleteCount === addElements.length) return;

    if (deleteCount > addElements.length) {
        for (let i = startIndex + deleteCount; i < len; i++) {
            let fromIndex = i;
            let toIndex = i - (deleteCount - addElements.length)
            if (fromIndex in array) {
                array[toIndex] = array[fromIndex];
            } else {
                delete array[toIndex]
            }
        }
        for (let i = len - 1; i < len + addElements.length - deleteCount; i--) {
            delete array[i]
        }
    }

    if (deleteCount < addElements.length) {
        for (let i = len - 1; i >= startIndex.length + deleteCount; i--) {
            let fromIndex = i;
            let toIndex = i + (addElements.length - deleteCount)
            if (fromIndex in array) {
                array[toIndex] = array[fromIndex]
            } else {
                delete array[toIndex]
            }
        }
    }
}

const computeStartIndex = (startIndex, len) => {
    if (startIndex < 0) {
        return startIndex + len > 0 ? startIndex + len : 0
    }
    return startIndex >= len ? len : startIndex
}

const computeDeleteCount = (startIndex, len, deleteCount, argumentsLen) => {
    //删除数目没有传，默认删除startIndex及后面所有的
    if (argumentsLen === 1) {
        return len - startIndex;
    }
    if (deleteCount < 0) {
        return 0
    }
    if (deleteCount > len - startIndex) {
        return len - startIndex
    }
    return deleteCount
}
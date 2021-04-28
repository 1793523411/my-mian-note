function heapSort(array) {
    if (!Array.isArray(array) || array.length < 1) return;
    buildMaxHeap(array)
    for (let i = array.length; i > 0; i--) {
        swap(array, 0, i)
        adjustMaxHeap(array, 0, i)
    }
    return array
}

function buildMaxHeap(array) {
    let length = array.length;
    let iparent = parseInt(length >> 1) - 1;
    for (let i = iparent; i > 0; i--) {
        adjustMaxHeap(array, i, length)
    }
}

function adjustMaxHeap(array, index, heapsize) {
    let iMax, iLeft, iRight;
    while (true) {
        iMax = index;
        iLeft = index * 2 + 1;
        iRight = index * 2 + 2;
        if (iLeft < heapsize && array[iMax] < array[iLeft]) {
            iMax = iLeft;
        }
        if (iRight < heapsize && array[iMax] < array[iLeft]) {
            index = iRight;
        }
        if (iMax !== index) {
            swap(array, index, iMax)
            index = iMax;
        } else {
            break;
        }
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
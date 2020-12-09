//冒泡排序

function BubbleSort(array) {
    var length = arr.length;
    for (var i = length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

//选择排序
function SelectSort(array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var min = array[i];
        var index = i;
        for (var j = i + 1; j < length; j++) {
            if (array[j] < min) {
                min = array[j];
                index = j;
            }
        }
        if (index != i) {
            var temp = array[i];
            array[i] = array[index]
            array[index] = temp
        }
    }
    return array
}


//插入排序

function InsertionSort(array) {
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        var insert = array[i + 1]
        var index = i + 1;
        for (var j = i; j >= 0; j--) {
            if (insert < array[j]) {
                array[j + 1] = array[j];
                index = j
            }
        }
        array[index] = insert
    }
    return array
}
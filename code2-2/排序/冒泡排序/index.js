const BubbleSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;
    let sign;
    // let count = 0
    let lastIndex;
    for (let i = 0; i < arr.length; i++) {
        sign = true;
        // for (let j = 0; j < arr.length - count; j++) {
        while (lastIndex > 0) {
            if (arr[j] > arr[j + 1]) {
                sign = false;
                lastIndex = j;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        // count++;
        if (sign) return
    }
}
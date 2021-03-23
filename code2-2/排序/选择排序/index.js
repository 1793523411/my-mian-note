const selectSort = (arr) => {
    if (!Array.isArray(arr) || arr.length < 1) return;
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) min = j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
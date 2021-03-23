const mergeSort = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return;
    if (arr.length === 1) return arr;
    let mid = parseInt(arr.length >>> 1);
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let il = 0;
    let ir = 0;
    let res = []
    while (il < left.length || ir < right.length) {
        if (left[il] > right[il]) res.push(right[ir++]);
        else res.push(left[il++]);
    }
    while (il < left.length) res.push(left[il++])
    while (ir < right.length) res.push(left[ir++])
    return res
}
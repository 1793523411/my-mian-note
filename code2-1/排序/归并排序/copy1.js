const merSort = (arr) => {
    if (!Array.isArray(arr) || length === 0) return;
    if (arr.length === 1) return arr;
    let mid = parseInt(length >>> 1);
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length);
    return merge(merSort(left), merSort(right))
}

const merge = (left, right) => {
    let res = [];
    let il = 0;
    let rl = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[rl]) res.push(left[il++])
        else res.push(right[rl++])
    }
    while (il < left.length) res.push(left[il++])
    while (rl < right.length) res.push(right[rl++])
    return res;
}
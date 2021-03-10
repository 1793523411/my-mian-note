var numWays = function (n) {
    let cache = new Array(n + 1).fill(-1);
    count(n, count)
    return cache[n]
}

var count = function (n, cache) {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    if (cache[n] !== -1) return cache[n]
    else cache[n] = (count(n - 1, cache) + count(n - 2, cache)) % 10000007
    return cache[n];
}
var fib = function (n) {
    let dp = [0, 1];
    function f(n) {
        if (dp[n] != undefined) {
            return dp[n];
        }
        dp[n] = f(n - 1) + f(n - 2);
        return dp[n] % 1000000007;
    }
    return f(n);
};



var fib = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = dp[2] = 1;
    for (let i = 0; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i + 2]) % 10000007
    }
    return dp[n] % 100000007
}

var fib = function (n) {
    if (n === 0) return 0;
    if (n === 2 || n === 1) return 1;
    let prev = 1
    let curr = 1;
    for (let i = 3; i <= n; i++) {
        let sum = prev + curr;
        prev = curr
        curr = sum % 10000007;
    }
    return curr % 10000007
}

var fib = function (n) {
    if (n <= 1) return n;
    return (fib(n - 1) + fib(n - 2)) % 1000000007
}
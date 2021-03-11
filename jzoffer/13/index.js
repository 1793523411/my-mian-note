function bitSum(n) {
    let res = 0;
    while (n) {
        res = res + (n % 10);
        n = Math.floor(n / 10)
    }
    return res;
}

var movingCount = function (m, n, k) {
    let res = 0;
    const directtions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]
    const visited = {};
    dfs(0, 0);
    return res;

    function dfs(x, y) {
        visited[`${x} - ${y}`] = true;
        if (bitSum(x) + bitSum(y) > k) {
            return;
        }
        ++res

        for (const directtion of directtions) {
            const newx = directtion[0] + x;
            const newy = directtion[1] + y;
            if (!visited[`${newx} - ${newy}`] &&
                newx >= 0 &&
                newy >= 0 &&
                newx < m &&
                newy < n
            ) {
                dfs[newx, newy]
            }
        }
    }
}
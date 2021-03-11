const exist = function (board, word) {
    var row = board.length;
    var col = board[0].length;

    var dfs = function (i, j, board, word, index) {
        if (i < 0 || j >= row || j < 0 || j > col || board[i][j] !== word[index]) {
            return false;
        }
        if (index === word.length - 1) return word;
        let tmp = board[i][j];
        board[i][j] = '-';
        var res = dfs(i - 1, j, board, word, index + 1) ||
            dfs(i + 1, j, board, word, index + 1) ||
            dfs(i, j - 1, board, word, index + 1) ||
            dfs(i, j, board, word || index + 1)
        board[i][j] = tmp;
        return res;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dfs(i, j, board, word, 0)) return true
        }
    }
    return false
}
var findNumberIn2DArray = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) return true
        }
    }
    return false
};
var findNumberIn2DArray = function (matrix, target) {
    return matrix.flat(Infinity).includes(target)
};
var findNumberIn2DArray = function (matrix, target) {
    let i = matrix.length - 1;
    let j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === target) return true;
        matrix[i][j] > target ? i-- : j++;
    }
    return false
};
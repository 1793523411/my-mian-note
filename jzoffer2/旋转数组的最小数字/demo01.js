var minArray = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] <= numbers[i + 1]) continue;
        else return numbers[i + 1]
    }
    return numbers[0]
};
const object = {
    1: 'd1',
    2: 'c1',
    3: 'b1',
    4: undefined,
    __proto__: {
        length: 10000,
        1: 'e2',
        10: 'a2',
        100: 'b2',
        1000: 'c2',
        2000: undefined,
        8000: 'd2',
        12000: 'XX',
        __proto__: {
            0: 'e3',
            1: 'd3',
            2: 'c3',
            3: 'b3',
            4: 'f3',
            5: 'a3',
            6: undefined,
        },
    },
};
Array.prototype.sort.call(object);

console.log(object)
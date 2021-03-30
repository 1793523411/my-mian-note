var _marked = /*#__PURE__*/regeneratorRuntime.mark(example);

function example() {
    return regeneratorRuntime.wrap(function example$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked);
}

var iter = example();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
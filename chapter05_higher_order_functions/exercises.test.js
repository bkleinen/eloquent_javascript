test('reduce', () => {
    expect([1, 2, 3, 4, 5].reduce((acc, val) => acc + val)).toBe(15);

});


test('flatten', () => {
    let flatten = (arrays) => {
        return arrays.reduce((acc, arr) => {
            return acc.concat(arr)
        });
    }
    let arrays = [[1, 2, 3], [4, 5], [6]];
    expect(flatten(arrays)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('your own loop', () => {
    let your_own_loop = (value, tester, update, body) => {
        if (tester(value)) {
            body(value);
            your_own_loop(update(value), tester, update, body);
        }
    };
    let sum = 0;
    your_own_loop(3, (n) => n > 0, n => n - 1, (v) => sum += v);
    expect(sum).toBe(6);
});

test('everything version 1 - loop', () => {
    function every(array, test) {
        for (let e of array) {
            if (!test(e))
                return false;
        }
        return true;
    }

    expect(every([1, 3, 5], n => n < 10)).toBe(true);
    expect(every([2, 4, 16], n => n < 10)).toBe(false);
    expect(every([], n => n < 10)).toBe(true);
});

test('everything version 2 - some', () => {
    function every(array, test) {
        return !array.some(e => !test(e));
    }

    expect(every([1, 3, 5], n => n < 10)).toBe(true);
    expect(every([2, 4, 16], n => n < 10)).toBe(false);
    expect(every([], n => n < 10)).toBe(true);
});

var cs = require('./character_scripts.js');
test('Dominant writing direction', () => {

    expect(cs.direction("Hello!")).toBe("ltr");
// → ltr
    expect(cs.direction("Hey, مساء الخير")).toBe("rtl");
// → rtl
});

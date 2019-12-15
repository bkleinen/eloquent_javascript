const mat = require('./matrix.js');
// https://eloquentjavascript.net/06_object.html#h_z2tOOXM8qO
test('ok iterator', () => {
    let okIterator = "OK"[Symbol.iterator]();
    expect(okIterator.next()).toStrictEqual({value: "O", done: false});
    expect(okIterator.next()).toStrictEqual({value: "K", done: false});
    expect(okIterator.next()).toStrictEqual({value: undefined, done: true});
});

test('matrix iterator', () => {
    let matrix = new mat.Matrix(2, 2, (x, y) => `value ${x},${y}`);
    result = "";
    for (let {x, y, value} of matrix) {
        result += `${x} ${y} ${value}\n`;
    }

    let exected = `0 0 value 0,0
1 0 value 1,0
0 1 value 0,1
1 1 value 1,1
`;
    expect(result).toBe(exected);
});

const x = 13;
function evalAndReturnX(code) {
    eval(code);
    return x;
}
let s= "var x = 4";
test('eval in function', () => {
    expect(evalAndReturnX(s)).toBe(4);
    expect(x).toBe(13);
});

test('eval directly', () => {
    eval(s);
    expect(x).toBe(4);
});
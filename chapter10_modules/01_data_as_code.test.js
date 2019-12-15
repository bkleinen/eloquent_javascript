const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}
let s= "var x = 2";
test('eval in function', () => {
    expect(evalAndReturnX()).toBe(2);
    expect(x).toBe(1);
});

test('eval directly', () => {
    expect(eval(s)).toBe(2);
    expect(x).toBe(2);
});
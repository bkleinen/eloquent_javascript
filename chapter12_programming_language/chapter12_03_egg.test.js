const egg = require("./egg.js");
test('number', () => {
    let program = "8";
    let parse = egg.parse(program);
    expect(parse.type).toBe("value");
    let evaluate = egg.evaluate(program);
    expect(evaluate).toBe(2);
});
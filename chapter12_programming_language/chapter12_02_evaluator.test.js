const egg = require("./egg.js");

test('xx', () => {

    let program = `do(define(x, 10),
   if(>(x, 5),
      print("large"),
      print("small")))
`;
    result = egg.evaluate(program);
    expect(result).toBe(1);
});

test('if', () => {

    let program = `do(define(x, 10),
   if(>(x, 5),
      71,
      72))
`;
    result = egg.evaluate(program);
    expect(result).toBe(42);
});

test('evaluate +', () => {
    let result = egg.evaluate("+(a, 10)");

});
/*
everything is an expression:
- the name of a binding ("word")
- a number, ("value")
- a string, ("value")
- an application ("apply")
- identifiers ("word")
 */
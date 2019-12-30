const egg = require("./egg.js");


let program = `do(define(x, 10),
   if(>(x, 5),
      print("large"),
      print("small")))
`;

test('string search', () => {
    let string = "  a hallo";
    let first = string.search(/\S/);
    expect(first).toBe(2);
});
test('parse program', () => {
    let program = `do(define(x, 10),
   if(>(x, 5),
      print("large"),
      print("small")))
`;
    let parse = egg.parseExpression(program);
    expect(parse.expr.type).toBe("apply");
});


test('parse +', () => {
    let result = egg.parse("+(a, 10)")
    // → {type: "apply",
//    operator: {type: "word", name: "+"},
//    args: [{type: "word", name: "a"},
//           {type: "value", value: 10}]}
    expect(result.type).toBe("apply");
});

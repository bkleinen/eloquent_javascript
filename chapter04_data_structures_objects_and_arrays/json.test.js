
/*
JSON looks similar to JavaScript’s way of writing arrays and objects, with a few
 restrictions. All property names have to be surrounded by double quotes, and
  only simple data expressions are allowed—no function calls, bindings, or
  anything that involves actual computation. Comments are not allowed in JSON.
*/
test('json serialisation', () => {

    let string = JSON.stringify({squirrel: false,
        events: ["weekend"]});
    expect(string).toBe("{\"squirrel\":false,\"events\":[\"weekend\"]}");

    let marshalled = (JSON.parse(string));
    expect(marshalled.events).toStrictEqual(["weekend"]);

});

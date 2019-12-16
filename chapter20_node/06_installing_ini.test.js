/*
npm install ini

(base) 07:00:55-kleinen~/mine/current/code/javascript-jest/chapter20_node (master)$ node
Welcome to Node.js v13.3.0.
Type ".help" for more information.
> const {parse} = require("ini");
undefined
> parse("x = 1\ny = 2");
{ x: '1', y: '2' }
 */
const {parse} = require('ini');
test('parse with ini', () => {
    let result = parse("x = 1\ny = 2");
    expect(result).toStrictEqual({ x: '1', y: '2' });
}); 
const importedExports = require('./importedfile.js');
let aFunction = importedExports.aFunction;
test('imported function', () => {
    expect(aFunction(4,3)).toBe(7);
});
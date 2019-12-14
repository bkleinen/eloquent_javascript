test('arrays',()=>{
    let listOfNumbers = [2, 3, 5, 7, 11];
    expect(listOfNumbers[2]).toBe(5);
});
test('should ', function () {

});

test('string functions', () => {
    expect('duh'.toUpperCase()).toBe('DUH');
    expect(typeof 'duh'.toUpperCase).toBe('function');
    let tuc = 'duh'.toUpperCase;
    expect(() => {
        tuc()
    }).toThrow(TypeError);
    // TypeError: String.prototype.toUpperCase called on null or undefined
    // TypeError: String.prototype.toUpperCase called on null or undefined
});

test('push and pop', () => {
    let sequence = [1, 2, 3];
    sequence.push(4);
    sequence.push(5);
    expect(sequence).toStrictEqual([1, 2, 3, 4, 5]);
   // console.log(sequence);
    expect(sequence.pop()).toBe(5);
    expect(sequence).toStrictEqual([1, 2, 3, 4]);
});
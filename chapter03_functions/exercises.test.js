test('even odd', () => {
    function isEven(n) {
        if (n == 0) return true;
        else if (n == 1) return false;
        return isEven(n - 2);
    };
    expect(isEven(50)).toBe(true);
    expect(isEven(71)).toBe(false);
    expect(() => isEven(-1)).toThrow();
    expect(isEven(2)).toBe(true);

});
test('even odd improved', () => {
    function isEven(n) {
        if (n < 0) return isEven(-1 * n)
        if (n == 0) return true;
        else if (n == 1) return false;
        return isEven(n - 2);
    };
    expect(isEven(-1)).toBe(false);
    expect(isEven(-2)).toBe(true);
});

test('count Bs', () => {
    function countBs(aString) {
        let counter = 0;
        for (let i = 0; i < aString.length; i += 1) {
            if (aString[i] == 'B')
                counter++;
        }
        return counter;
    }

    expect(countBs('BBC')).toBe(2);

});

test('count Chars', () => {
    function countChar(aString, character) {
        let counter = 0;
        for (let i = 0; i < aString.length; i += 1) {
            if (aString[i] === character)
                counter++;
        }
        return counter;
    }

    expect(countChar("kakkerlak", "k")).toBe(4);

});
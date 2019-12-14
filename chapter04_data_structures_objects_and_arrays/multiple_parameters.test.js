test('taking infinite parameters', () => {
    function max(...numbers) {
        let result = -Infinity;
        for (let number of numbers) {
            if (number > result) result = number;
        }
        return result;
    }
    expect(max(4, 1, 9, -2)).toEqual(9);

    let numbers = [5, 1, 7];
    expect(max(...numbers)).toEqual(7);
});
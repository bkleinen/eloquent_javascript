test('multiplier with closure', () => {

    function multiplier(factor) {
        return number => number * factor;
    }

    let twice = multiplier(2);
    let trice = multiplier(3);

    expect(twice(43)).toBe(86);
    expect(trice(34)).toBe(102);
})
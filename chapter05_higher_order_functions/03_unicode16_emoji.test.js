
test('emoji', () => {
    // Two emoji characters, horse and shoe
    let horseShoe = "🐴👟";
    expect(horseShoe.length).toBe(4);
// → 4
    // expect(horseShoe[0]).toBe("�");
// → (Invalid half-character)
    expect(horseShoe.charCodeAt(0)).toBe(55357);
// → 55357 (Code of the half-character)
    expect(horseShoe.codePointAt(0)).toBe(128052);
// → 128052 (Actual code for horse emoji)
});

test('if', () => {
    let a = 1;
    if (true) {
         a = 5;
    }
    else {
         a = 8;
    }
    expect(a).toBe(5);

});
test('isNaN', () => {
    let numberString = "zwei";
let theNumber = Number(numberString);
    let result;
if (!Number.isNaN(theNumber)) {
    result = "NaN"
}
expect(theNumber).toBe(NaN);
expect(result).toBe(undefined)
});

test('switch', ()  => {
    let x = "sunny";
    let result = 5;
    switch (x) {
        case "rainy":
            result = 0;
            break;
        case "sunny":
            result += 8;
        case "cloudy":
            result += 8;
            break;
        default:
            result += 5;
            break;
    }
    expect(result).toBe(21);
})
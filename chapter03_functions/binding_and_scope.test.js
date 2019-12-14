test('var and let', () => {
    let x = 10;
    if (true) {
        let y = 20;
        var z = 30;
        console.log(x + y + z);
        // → 60
    }
// y is not visible here
   // expect(y).toBe(undefined);
// z is visible here
    expect(z).toBe(30);
    // x as well

    expect(x + z).toBe(40)
});

test('hummus', () => {
    const hummus = function (factor) {
        const ingredient = function (amount, unit, name) {
            let ingredientAmount = amount * factor;
            if (ingredientAmount > 1) {
                unit += "s";
            }
            return `${ingredientAmount} ${unit} ${name}\n`;

        };
        result = '';
        result += ingredient(1, "can", "chickpeas");
        result += ingredient(0.25, "cup", "tahini");
        result += ingredient(0.25, "cup", "lemon juice");
        result += ingredient(1, "clove", "garlic");
        result += ingredient(2, "tablespoon", "olive oil");
        result += ingredient(0.5, "teaspoon", "cumin");
        return result;
    };
    let expected = `5 cans chickpeas
1.25 cups tahini
1.25 cups lemon juice
5 cloves garlic
10 tablespoons olive oil
2.5 teaspoons cumin
`;
    expect(hummus(5)).toBe(expected);
});

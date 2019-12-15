test('functions on objects', () => {
    let rabbit = {};
    rabbit.speak = function (line) {
        return (`The rabbit says '${line}'`);
    };

    expect(rabbit.speak("I'm alive.")).toBe("The rabbit says 'I'm alive.'");
// →
});

test('two rabbits', () => {
    function speak(line) {
        return (`The ${this.type} rabbit says '${line}'`);
    }

    let whiteRabbit = {type: "white", speak};
    let hungryRabbit = {type: "hungry", speak};

    expect(whiteRabbit.speak("Oh my ears and whiskers, " +
        "how late it's getting!")).toBe("The white rabbit says 'Oh my ears and whiskers, how late it's getting!'");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
    expect(hungryRabbit.speak("I could use a carrot right now.")).toBe("The hungry rabbit says 'I could use a carrot right now.'");
// → The hungry rabbit says 'I could use a carrot right now.'
});
test('prototypes', () => {
    expect(Object.getPrototypeOf(Math.max)).toBe(Function.prototype);

    expect(Object.getPrototypeOf([])).toBe(Array.prototype);

});
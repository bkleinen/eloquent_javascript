test('functions on objects', () => {
    let rabbit = {};
    rabbit.speak = function (line) {
        return (`The rabbit says '${line}'`);
    };

    expect(rabbit.speak("I'm alive.")).toBe("The rabbit says 'I'm alive.'");
// →
});

describe('two rabbits', function () {
    const speak =  function (line) {
        return (`The ${this.type} rabbit says '${line}'`);
    };
    const whiteRabbit = {type: "white", speak};
    const hungryRabbit = {type: "hungry", speak};

    test('share a function and have their own this binding', () => {

        expect(whiteRabbit.speak("Oh my ears and whiskers, " +
            "how late it's getting!")).toBe("The white rabbit says 'Oh my ears and whiskers, how late it's getting!'");

        expect(hungryRabbit.speak("I could use a carrot right now.")).toBe("The hungry rabbit says 'I could use a carrot right now.'");
    });
    test('with call this can be passed explicitely', () => {
        expect(speak.call(hungryRabbit, "Burp!")).toBe("The hungry rabbit says 'Burp!'");
    });



});

test('arrow functions can see the this of the scope around them', () => {
    function normalize() {
        return(this.coords.map(n => n / this.length));
    }
    expect(normalize.call({coords: [0, 2, 3], length: 5})).toStrictEqual([0, 0.4, 0.6]);
});


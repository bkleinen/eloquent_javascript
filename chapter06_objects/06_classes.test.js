class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        return `The ${this.type} rabbit says '${line}'`;
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
test('class notation', () => {



    expect(killerRabbit.speak("hello")).toBe( "The killer rabbit says 'hello'");
    expect(blackRabbit.speak("hello")).toBe( "The black rabbit says 'hello'");
});
test('add non function field via prototype', () => {
    Rabbit.prototype.text = "This is the Rabbit text";
    let whiteRabbit = new Rabbit("white");
    expect(whiteRabbit.text).toBe("This is the Rabbit text");
});

test('overriding derived properties', () => {
    Rabbit.prototype.teeth = "small";
    expect(killerRabbit.teeth).toBe("small");
    killerRabbit.teeth = "long, sharp, and bloody";
    expect(killerRabbit.teeth).toBe("long, sharp, and bloody");
    expect(blackRabbit.teeth).toBe("small");
    expect(Rabbit.prototype.teeth).toBe("small");

});
test('all objects have the Object Prototype', () => {
    let empty = {};
    expect(empty.toString.toString()).toBe("function toString() { [native code] }");
    expect(empty.toString()).toBe("[object Object]");
    expect(Object.getPrototypeOf({})).toBe(Object.prototype);
});
test('prototypes', () => {
    expect(Object.getPrototypeOf(Math.max)).toBe(Function.prototype);
    expect(Object.getPrototypeOf([])).toBe(Array.prototype);
});

test('use Object.create to create object with specific prototype', () => {
    let protoRabbit = {
        speak(line) {
           return `The ${this.type} rabbit says '${line}'`;
        }
    };
    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "killer";
    expect(killerRabbit.speak("SKREEEE!")).toBe("The killer rabbit says 'SKREEEE!'");
    expect(typeof killerRabbit).toBe("object");

});
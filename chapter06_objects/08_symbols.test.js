r = require('./rabbits.js');
test('symbols', () => {
    let sym = Symbol("name");
    expect(sym == Symbol("name")).toBe(false);
    r.Rabbit.prototype[sym] = 55;
    r.Rabbit.prototype.name = "theName";
    r.Rabbit.prototype["name"] = "theQuotedName";
    expect(r.blackRabbit[sym]).toBe(55);
    expect(r.blackRabbit.name).toBe("theQuotedName");
    expect(r.blackRabbit["name"]).toBe("theQuotedName");
});
const toStringSymbol = Symbol("toString");
test('symbols allow to define interfaces that will not collide with others', () => {

    Array.prototype[toStringSymbol] = function() {
        return `${this.length} cm of blue yarn`;
    };

    expect([1, 2].toString()).toBe("1,2");
    expect([1, 2][toStringSymbol]()).toBe("2 cm of blue yarn");
});

test('symbol properties can be set in object literals', () => {
    let stringObject = {
        [toStringSymbol]() { return "a jute rope"; }
    };
    expect(stringObject[toStringSymbol]()).toBe("a jute rope");
}); 
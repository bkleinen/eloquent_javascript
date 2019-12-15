let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};
test('access properties', () => {
    expect(ages["Júlia"]).toBe(62);
});

test('but it inherits from object', () => {
    expect("toString" in ages).toBe(true);
});

test('create without prototype', () => {
    expect("toString" in Object.create(null)).toBe(false);
});

let betterAges = new Map();
betterAges.set("Boris", 39);
betterAges.set("Liang", 22);
betterAges.set("Júlia", 62);

test('but it inherits from object', () => {
    expect("toString" in betterAges).toBe(true);
});

//The methods set, get, and has are part of the interface of the Map object.

test('hasOwnProperty', () => {
    expect({x: 1}.hasOwnProperty("x")).toBe(true);
    expect({x: 1}.hasOwnProperty("toString")).toBe(false);
});

r = require('./rabbits.js');
test('overwrite toString', () => {
    r.Rabbit.prototype.toString = function() {
        return `a ${this.type} rabbit`;
    };
    expect(String(r.blackRabbit)).toBe("a black rabbit");
});

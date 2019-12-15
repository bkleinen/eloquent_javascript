const rabbit = {
    name: "Hollow",
    color: "Black and White",
    age:6,
};
test('objects are maps of properties', () => {
    rabbit.age++;
    expect(rabbit.age).toBe(7);
});

test('and reference types', () => {
    let r2 = rabbit;
    r2.name = "R2D2";
    expect(rabbit.name).toBe("R2D2");
});
const robots = require('./07_robots');
const VillageState = robots.VillageState;
test('state is not changed', () => {
    let initialParcels = [{place: "Post Office", address: "Alice's House"}];
    let first = new VillageState(
        "Post Office",
        initialParcels
    );
    let next = first.move("Alice's House");

    expect(next.place).toBe("Alice's House");
    expect(next.parcels).toStrictEqual([]);
    expect(first.place).toBe("Post Office");
    expect(first.parcels).toStrictEqual(initialParcels);
});
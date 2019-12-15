let map = {one: true, two: true, hasOwnProperty: true};

test('Fix this call', () => {
    map_proto = Object.getPrototypeOf(map);
    expect(map_proto.hasOwnProperty.call(map,"one")).toBe(true);
  });

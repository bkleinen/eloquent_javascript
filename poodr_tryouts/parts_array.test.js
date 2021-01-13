class Parts extends Array{
  spares(){return "spares"}
  pick_one(){return this.filter(p => p === "part 4")}
}

describe ("Parts as Array Subclass",()=>{
  test("Parts is an Array - inherits unshift, push and length", ()=>{
    const p = new Parts
    p.unshift(" a part")
    expect(p.length).toBe(1)
    p.push("part b")
    expect(p.length).toBe(2)
  })
  test('prototypes',()=>{
    const a = []
    expect(Object.getPrototypeOf(a)).toBe(Array.prototype);

    const p = new Parts
    expect(Object.getPrototypeOf(p)).toBe(Parts.prototype);

  })
  test("Parts responds to spares",()=>{
    const parts = new Parts
    expect(parts.spares()).toEqual("spares")
  })
  test('concat two Parts',()=>{
    const parts1 = new Parts
    const parts2 = new Parts
    parts1.unshift("part 1")
    parts1.unshift("part 2")
    parts1.unshift("part 3")
    parts2.unshift("part 4")
    parts2.unshift("part 5")
    const parts3 = parts1.concat(parts2)
    expect(parts3.spares()).toEqual("spares")
    expect(parts3.length).toEqual(5)
  })
  test('filter on subclass',()=>{
    const parts= new Parts
    parts.unshift("part 1")
    parts.unshift("part 2")
    parts.unshift("part 3")
    parts.unshift("part 4")
    parts.unshift("part 5")
    const spare_parts = parts.pick_one()
    expect(Object.getPrototypeOf(spare_parts)).toBe(Parts.prototype);
    expect(spare_parts.length).toEqual(1)
    expect(parts.length).toEqual(5)
    spare_parts.unshift("new part")
    expect(spare_parts.length).toEqual(2)
    expect(parts.length).toEqual(5)
  })
  test('constructor',()=>{
    const a = ["a","b"]
    const parts = new Parts(...a)
    expect(parts.length).toEqual(2)
    expect(Object.getPrototypeOf(a)).toBe(Array.prototype);
    expect(Object.getPrototypeOf(parts)).toBe(Parts.prototype);
  })
})


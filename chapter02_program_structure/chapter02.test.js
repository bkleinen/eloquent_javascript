

describe('playing with binding', () => {
  let caught = 5 * 5;
  test('binding',() =>{
    expect(caught).toBe(25);
  });
  let mood = "light";
  test('binding 2',() =>{
    expect(mood).toBe("light");
  });

  test('variables can be changed',() =>{
    let mood = "light";
    mood = "dark";
    expect(mood).toBe("dark");
  });


  test('binding 4',() =>{
    mood = "dark";
    expect(mood).toBe("dark");
  })
});

test('number conversion', () => {
  expect(Number("1")).toBe(1);
});

test('number conversion 2', () => {
  expect(Number("eins")).toBe(NaN);
});

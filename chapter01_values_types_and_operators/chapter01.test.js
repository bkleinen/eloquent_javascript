
test('fractional number', () => {
  expect(9.81).toBe(9.81);
});

test('arithmetic', () => {
  expect(100 + 4 * 11).toBe(144);
});

test('arithmetic with parantheses', () => {
  expect((100 + 4) * 11).toBe(1144);
});
test('Infinity', () => {
  expect(0/0).toBe(NaN);
});
test('Infinity - 1 is still Infinity', () => {
  expect(Infinity - 1).toBe(Infinity);
});
test('-1/0', () => {
  expect(-1/0).toBe(-Infinity);
});


test('String concatenation', () => {
  expect("con" + "cat" + "e" + "nate").toBe("concatenate");
});

test('String interpolations', () => {
  expect(`half of 100 is ${100 / 2}`).toBe("half of 100 is 50");
});


test('type of',() => {
  expect(typeof 4.5).toBe('number')
})

test('less than for strings',() => {
  expect("AA" < "AB").toBe(true)
})

test('unequal strings',() => {
  expect("Itchy" != "Scratchy").toBe(true)
})


test('equal strings',() => {
  expect("Apple" == "Orange").toBe(false)
})

console.log(true ? 1 : 2);

test('Ternary Operator',() => {
  expect(true ? 1 : 2).toBe(1)
})

// null and undefined

test('',() => {
  expect().toBe()
})

// Automatic type conversion


test('conversion of null',() => {
  expect(8 * null).toBe(0)
})

test('string to number',() => {
  expect("5" - 1).toBe(4)
})

test('number to string with concatenation',() => {
  expect("5" + 1).toBe("51")
})

test('no conversion for *',() => {
  expect("five" * 2).toBe(NaN)
})

test('falsey',() => {
  expect(false == 0).toBe(true)
})

// Short-CCicuiting of logical operators


test('or, second value',() => {
  expect(null || "user").toBe("user")
})

test('or, first value',() => {
  expect("Agnes" || "user").toBe("Agnes")
})

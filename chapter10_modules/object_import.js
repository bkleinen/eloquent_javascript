const {days, months} = require("date-names");
test('multiple objects can be required', ()=>{
  console.log(days);
  expect(days).toBe([])
})

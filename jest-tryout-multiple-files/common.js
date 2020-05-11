console.log ("in common.js")

let testRun

beforeAll(()=>{
  testRun = 0
  console.log("beforeAll")
})
afterAll(()=>{
  console.log("afterAll - ran " +testRun)
})
beforeEach(() => {
  testRun = testRun + 1;
  global.counter = global.counter +1 
  console.log("Global beforeEach number "+testRun)
})

module.exports = { sum: (a,b) => a+b, testRun: testRun }

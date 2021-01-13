const {sum, testRun } = require("../../../jest-tryout-multiple-files/common")

it("tests something", done => {
  expect(sum(3,4)).toBe(7)
  done()
})

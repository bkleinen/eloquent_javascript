const {sum, testRun } = require("/Users/kleinen/mine/current/code/javascript-jest/jest-tryout-multiple-files/common")

it("tests something", () => {
  expect(sum(3,9)).toBe(12)
})
it("tests more", () => {
  expect(sum(4,9)).toBe(13)
})

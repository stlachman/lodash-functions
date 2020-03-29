const uniq = require("./uniq.js");

it("should return unique values in order", () => {
  expect(uniq([2, 1, 2])).toEqual([2, 1]);
});

it("should return unique values in order", () => {
  expect(uniq([2, 1, 2, 3, 4, 4])).toEqual([2, 1, 3, 4]);
});

it("should return empty array if no values are provided", () => {
  expect(uniq([])).toEqual([]);
});

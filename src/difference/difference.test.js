const difference = require("./difference");

it("returns new array of filtered values", () => {
  expect(difference([2, 1], [2, 3])).toEqual([1]);
});

it("returns an empty array if all values match", () => {
  expect(difference([2, 1], [2, 1])).toEqual([]);
});

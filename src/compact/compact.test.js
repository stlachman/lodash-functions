const compact = require("./compact");

it("returns a new array of filtered values", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

it("returns an empty array if all values are falsey", () => {
  expect(compact([0, false, ""])).toEqual([]);
});

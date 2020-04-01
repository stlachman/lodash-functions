const flattenDeep = require("./flattenDeep.js");

it("should flatten nested array to one level", () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
});

it("should return empty array if array is empty", () => {
  expect(flattenDeep([])).toEqual([]);
});

it("should return array unchanged if no values are nested", () => {
  expect(flattenDeep([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

it("should flatten nested array to one level", () => {
  expect(flattenDeep([1, 2, 3, [{ a: 1 }, [{ hi: 2 }]], 4, 5])).toEqual([
    1,
    2,
    3,
    { a: 1 },
    { hi: 2 },
    4,
    5
  ]);
});

const chunk = require("./chunk");

it("it chunks an array when no value is provided", () => {
  expect(chunk([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
});

it("it chunks an array into even chunks", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"]
  ]);
});

it("it chunks array and places remaining elements in final chunk", () => {
  expect(chunk(["a", "b", "c", "d", "e", "f", "g"], 3)).toEqual([
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g"]
  ]);
});

it("it returns an empty array if an empty array is passed in", () => {
  expect(chunk([], 3)).toEqual([]);
});

it("it returns an empty array if a negative size is passed in", () => {
  expect(chunk([1, 2, 3, 3], -2)).toEqual([]);
});

it("it returns an empty array if a null value is passed in ", () => {
  expect(chunk(null, 2)).toEqual([]);
});

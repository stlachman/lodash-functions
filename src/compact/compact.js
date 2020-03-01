const compact = array => {
  let falseyValues = new Set([false, null, 0, "", undefined, NaN]);
  return array.filter(value => !falseyValues.has(value));
};

module.exports = compact;

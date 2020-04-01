const flattenDeep = array => {
  let results = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      results = results.concat(flattenDeep(value));
    } else {
      results.push(value);
    }
  }
  return results;
};

module.exports = flattenDeep;

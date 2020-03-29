const uniq = values => {
  let uniqueValues = [];
  let hash = {};

  for (let value of values) {
    if (!hash[value]) {
      uniqueValues.push(value);
      hash[value] = 1;
    }
  }
  return uniqueValues;
};

module.exports = uniq;

const chunk = (array, size = 1) => {
  if (size < 0 || array === null || array.length === 0) return [];
  let chunkedValues = [];

  for (let i = 0; i < array.length; i += size) {
    chunkedValues.push(array.slice(i, i + size));
  }
  return chunkedValues;
};

module.exports = chunk;

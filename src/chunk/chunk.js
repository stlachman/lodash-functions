const chunk = (array, size = 1) => {
  let chunkedArr = [];

  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

module.exports = chunk;

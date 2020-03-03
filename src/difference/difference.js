// const difference = (array, values) => {
//   let result = [];
//   for (let element of array) {
//     if (!values.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// };

const difference = (array, values) => {
  let map = new Map();

  for (let i = 0; i < values.length; i++) {
    map.set(values[i], i);
  }

  let result = [];
  for (let element of array) {
    if (!map.has(element)) {
      result.push(element);
    }
  }
  return result;
};

module.exports = difference;

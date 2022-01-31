/**
 * uniqueBySet
 *
 * Use Set and Map to create a new Array without duplicates
 * - Preserves JavaScript Objects with prop functions
 * - Works on mixed arrays [Object, Array, Number, String]
 * - Works on JSON
 *
 * @param originalArray Array you want to remove duplicates from
 *
 * @returns Array with no duplicates
 *
 * @example
 *
 * const uniqueBySet = require('unique-by-set')
 *
 * console.log(uniqueBySet(['a', 'b', 'c', 'c', 'd', 'd', 'a']))
 * => [ 'a', 'b', 'c', 'd' ]
 * */
function uniqueBySet(originalArray) {
  if (!Array.isArray(originalArray)) {
    throw new Error(`first argument must be an Array`);
  }
  const result = [];
  const myMap = originalArray.map((item) => {
    if (typeof item !== 'string') {
      return JSON.stringify(item);
    }
    return item;
  });
  new Set(myMap).forEach((str) => {
    let index = myMap.indexOf(str);
    result.push(originalArray[index]);
  });
  return result;
}

module.exports = uniqueBySet;


for (let i = 0; i < array.length; i++) {

  if (array[i] !== toMove) {
    const temp = array[i];
    array[i] = array[i - 1];
    array[i - 1] = temp;
  }
  
}


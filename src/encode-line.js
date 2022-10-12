const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let arr = str.split('');
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    count++;
    if(arr[i] !== arr[i + 1]) {
      if(count > 1) {
        result += count;
      }
        result += arr[i];
      count = 0;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};

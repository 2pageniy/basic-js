const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = [];
  let count = 0;
  for (let i = 0; i < names.length; i++) {
    if(newNames.length <= i) {
      newNames[i] = names[i]
    }

    if (names.slice(0, i).indexOf(newNames[i]) !== -1 || newNames.slice(0, i).indexOf(newNames[i]) !== -1) {
      count++;
      newNames[i] = `${names[i]}(${count})`;
      i--;
      continue;
    }
    count = 0;
  }
  return newNames;
}

let names = ["file", "file", "image", "file(1)", "file"];
console.log(renameFiles(names))

module.exports = {
  renameFiles
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = new Array(matrix.length);
  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i] = new Array(matrix[i].length)
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let upOne     = matrix[i - 1]?.[j - 1] || false;
      let upTwo     = matrix[i - 1]?.[j] || false;
      let upThree   = matrix[i - 1]?.[j + 1] || false;
      let downOne   = matrix[i + 1]?.[j - 1] || false;
      let downTwo   = matrix[i + 1]?.[j] || false;
      let downThree = matrix[i + 1]?.[j + 1] || false;
      let left      = matrix[i]?.[j - 1] || false;
      let right     = matrix[i]?.[j + 1] || false;
      let count = upOne + upTwo + upThree + downOne + downTwo + downThree + left + right;
      newMatrix[i][j] = count;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};

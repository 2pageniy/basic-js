const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!('separator' in options)) {
    options.separator = '+';
  }
  
  if(!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }

  let {separator, repeatTimes, additionSeparator, addition, additionRepeatTimes} = options;

  if(addition !== undefined) {
    addition = String(addition);
  }
  
  let additionResult = [addition];
  if(additionRepeatTimes) {
    for(let i = 1; i < additionRepeatTimes; i++) {
      additionResult.push(addition);
    }
  }

  additionResult = additionResult.join(additionSeparator);

  let result = [`${str}${additionResult}`];
  for(let i = 1; i < repeatTimes; i++) {
    result.push(`${str}${additionResult}`);
  }
  return result.join(separator);
}

repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })

module.exports = {
  repeater
};

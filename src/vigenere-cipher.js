const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toLowerCase();
    key = key.toLowerCase();
    let notLetter = 0;
    for(let i = 0; i < message.length; i++) {
      if(this.alphabet.indexOf(message[i]) !== -1) {
        let newPositionLetter = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[(i - notLetter) % key.length])) % 26
        result += this.alphabet[newPositionLetter];
      } else {
        result += message[i];
        notLetter++;
      }
    }
    result = result.toUpperCase();
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();
    let notLetter = 0;
    for(let i = 0; i < encryptedMessage.length; i++) {
      if(this.alphabet.indexOf(encryptedMessage[i]) !== -1) {
        let newPositionLetter = (this.alphabet.indexOf(encryptedMessage[i]) - this.alphabet.indexOf(key[(i - notLetter) % key.length]));
        if(newPositionLetter < 0) {
          newPositionLetter += 26;
        }
        result += this.alphabet[newPositionLetter]; 
      } else {
        result += encryptedMessage[i];
        notLetter++;
      }
    }
    result = result.toUpperCase();
    return this.direct ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};

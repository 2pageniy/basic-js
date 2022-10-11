const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if(position > this.chains.length || position < 1 || typeof position !== 'number') {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains = [...this.chains.slice(0, position - 1), ...this.chains.slice(position, this.chains.length)];
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let finishChains = [...this.chains];
    this.chains = [];
    return finishChains.map(chain => {
      return `( ${chain} )`;
    }).join('~~');
  }
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))

module.exports = {
  chainMaker
};

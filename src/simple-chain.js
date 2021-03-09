const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
	getLength() {
		return this.result.length;
	},
	addLink(value) {
		this.result.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (position <= 0 || isNaN(position) || position % 1 !== 0) {
			this.result = [];
			throw new Error();
		} else {
			this.result.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.result.reverse();
		return this;
	},
	finishChain() {
		let chain = this.result.join('~~');
		this.result = [];
		return chain;
	}
};

module.exports = chainMaker;

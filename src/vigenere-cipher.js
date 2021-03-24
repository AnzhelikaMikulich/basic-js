const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
	constructor(cryptogram = true) {
		return (this.cryptogram = cryptogram);
	}
	encrypt(message, key) {
		if (arguments[0] == undefined || arguments[1] == undefined) {
			throw Error('Check input parametrs!');
		}
		const wordСipher = message.toLowerCase().split('');
		let wordKey = key.toLowerCase();
		while (wordСipher.length > wordKey.length) {
			wordKey += wordKey;
		}
		wordKey = wordKey.split('');

		let result = [];
		let count = 0;

		for (let e of wordСipher) {
			if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) < 123) {
				let eСipher = e.toUpperCase().charCodeAt(0) - 65;
				let eKey = wordKey[count++].toUpperCase().charCodeAt(0) - 65;
				let sum = eСipher + eKey;
				if (sum >= 26) {
					sum = sum % 26;
				}
				result.push(String.fromCharCode(sum + 65).toUpperCase());
			} else {
				result.push(e);
			}
		}
		return this.cryptogram ? result.join('') : result.reverse().join('');
	}

	decrypt(encryptMessage, key) {
		if (arguments[0] == undefined || arguments[1] == undefined) {
			throw Error('Check input parametrs!');
		}

		const wordDecipher = encryptMessage.toUpperCase().split('');
		let wordKey = key.toUpperCase();

		while (wordDecipher.length > wordKey.length) {
			wordKey += wordKey;
		}
		wordKey = wordKey.split('');
		let result = [];
		let count = 0;

		for (let e of wordDecipher) {
			if (e.charCodeAt(0) >= 65 && e.charCodeAt(0) < 91) {
				let eDecipher = e.toLowerCase().charCodeAt(0) - 97;
				let eKey = wordKey[count++].toLowerCase().charCodeAt(0) - 97;
				let sum = eDecipher - eKey;
				if (sum < 0) {
					sum = eDecipher - eKey + 26;
				}
				result.push(String.fromCharCode(sum + 97).toUpperCase());
			} else {
				result.push(e);
			}
		}

		return this.cryptogram ? result.join('') : result.reverse().join('');
	}
}
module.exports = VigenereCipheringMachine;

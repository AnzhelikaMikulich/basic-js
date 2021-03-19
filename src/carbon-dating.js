const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	const N = parseFloat(sampleActivity);
	if (typeof sampleActivity === 'string' && N > 0 && N < MODERN_ACTIVITY) {
		const k = 0.693 / HALF_LIFE_PERIOD;
		const t = Math.ceil(Math.log(MODERN_ACTIVITY / N) / k)
		return t;
	} else {
		return false;
	}
};

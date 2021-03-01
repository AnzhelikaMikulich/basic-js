const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = [];

  if (options.addition !== undefined) {
    if (options.additionRepeatTimes) {
      for (i = 0; i < options.additionRepeatTimes; i++) {
        addition.push(String(options.addition));
      }
    } else {
      addition.push(String(options.addition));
    }
  }
  if (options.additionSeparator) {
    addition = addition.join(options.additionSeparator);
  } else {
    addition = addition.join("|");
  }

  let repetitionArray = [];

  if (options.repeatTimes) {
    for (i = 0; i < options.repeatTimes; i++) {
      repetitionArray.push(String(str) + addition);
    }
  } else {
    repetitionArray.push(String(str) + addition);
  }

  if (options.separator) {
    return repetitionArray.join(options.separator);
  } else {
    return repetitionArray.join("+");
  }
};

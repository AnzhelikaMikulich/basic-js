const CustomError = require("../extensions/custom-error");

module.exports =function calculateHanoi( disksNumber, turnsSpeed ) {
  
  let calc = {};
  calc.turns = 2**disksNumber - 1;
  calc.seconds = Math.floor((3600 / turnsSpeed) * calc.turns);

  return calc;
};

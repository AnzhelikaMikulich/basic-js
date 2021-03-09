const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = [];
    if (!Array.isArray(arr)) {
      return 0;
    }
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        if(element.length === 0){
          element[0]=1;
          result = result.concat(element);
        }else{
           result = result.concat(element);
        }
       
      }
    }
  
    if (result.length === 0) {
      return 1;
    } else {
      return 1 + this.calculateDepth(result);
    }
  }
};
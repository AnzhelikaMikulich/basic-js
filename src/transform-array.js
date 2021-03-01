const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
      return error;
    }else{
      let newArrResult = [];
  
      arr.forEach((e,i) => {
        if(e === '--double-next'){
          newArrResult.push(arr[i+1]);
        } else if(e === '--double-prev'){
          newArrResult.push(newArrResult[newArrResult.length-1]);
        } else if(arr[i+1] === '--discard-prev'){
          newArrResult.push(undefined);
        } else if(arr[i-1] === '--discard-next'){
          newArrResult.push(undefined);
        } else {
          newArrResult.push(e);
        }
      })
  
      return newArrResult.filter(element => {
          if(element !== '--discard-prev' && element !== '--discard-next' && element !== undefined){
            return true;
          }else{
            return false;
          }
        });
    }

};

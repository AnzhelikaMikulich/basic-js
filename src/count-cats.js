const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let arrCats = [];
  let arrAll = array.toString().split(",");
for (let i = 0; i < arrAll.length; i++) {
  if( arrAll[i]=== '^^'){
    arrCats.push(arrAll[i])
  }
};
if(!arrCats.length){
  return 0
}else{
  return arrCats.length
}
}

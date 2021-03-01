const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  if (date) {
    if (isNaN(date.getTime())) {
      throw new CustomError("Unable to determine the time of year!");
    } else {
      let month = date.getMonth();
      if (month >= 2 && month <= 4) {
        return "spring";
      } else if (month > 4 && month <= 7) {
        return "summer";
      } else if (month > 7 && month <= 10) {
        return "autumn";
      } else {
        return "winter";
      }
    }
  } else {
    return "Unable to determine the time of year!";
  }
};

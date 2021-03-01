const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  try {
    if (members) {
      let dream = members
        .map((element) => {
          if (typeof element === "string") {
            return element.trim().slice(0, 1).toUpperCase();
          } else {
            return false;
          }
        })
        .sort();
      return dream
        .filter((e) => {
          if (e) {
            return true;
          } else {
            return false;
          }
        })
        .join("");
    } else {
      throw new CustomError("Not implemented");
    }
  } catch (err) {
    return false;
  }
};


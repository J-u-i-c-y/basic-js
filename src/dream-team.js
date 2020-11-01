const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let str = '';
  let newArr = [];
  for (let i of arr) {
    if (typeof i === 'string') {
      for (j = 0; j < i.length; j++){
       if (i[j] !== ' ') {
        newArr.push ((i[j]).toUpperCase());
        break;
       }
    }
    }
  }
  newArr.sort();
  for (let i of newArr) {
    str += i;
  }
  return str;
};
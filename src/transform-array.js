const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      if(arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev') {
        i++;
      }
    } else if (arr[i] === '--discard-prev') {
      if (newArr.length !== 0) {
        newArr.pop();
      }
    }
    else
    if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        newArr.push(arr[i+1]);
      }
    }
    else
    if (arr[i] === '--double-prev') {
      if (i !== 0) {
        newArr.push(arr[i-1]);
      }
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
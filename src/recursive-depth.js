const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let d = 1;
    for (let i of arr) {
      let count = 1;
      if (Array.isArray(i)) {
        count += this.calculateDepth(i);
        if (d < count) {
          d = count;
        }
      }
    }
   return d;
 }
};
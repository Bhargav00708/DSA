/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num:string) {
  let result = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (result.length > 0) {
      result = num[i] + result;
    }
    if (parseInt(num[i]) % 2 != 0 && result.length == 0) {
      result += num[i];
    }
  }
  return result;
};

console.log(largestOddNumber("12577772233"));


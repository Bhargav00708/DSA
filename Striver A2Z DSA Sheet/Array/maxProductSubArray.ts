// ? typical DP Problem.

var maxProduct = function (nums: number[]) {
  let positiveNumber = nums[0];
  let nagativeNumber = nums[0];
  let result = nums[0];
  let temp;
  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(
      nums[i],
      nums[i] * positiveNumber,
      nums[i] * nagativeNumber
    );
    nagativeNumber = Math.min(
      nums[i],
      nums[i] * positiveNumber,
      nums[i] * nagativeNumber
    );
    positiveNumber = temp;
    result = Math.max(result, positiveNumber);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));

// ? Here understand if we take min and max of [2,3] so we are getting min or max value till [2,3]
// ? if [2,3,-2] so we are getting min and max till [2,3,-2]
// ? and we are taking min(n) or max(n) because of [-1,8](max)(8) [-1,-8](min)(-8)

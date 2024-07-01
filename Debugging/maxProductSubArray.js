var maxProduct = function (nums) {
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
    result = Math.min(result, nagativeNumber);
  }
  return result;
};

console.log(maxProduct([2, 3]));

// ? Kadnes algorithms

const maxSubArray = function (nums: Array<number>) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

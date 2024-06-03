const nums: Array<number> = [90, 89, 70, 90, -8, -7];

for (let i = 0; i < nums.length; ++i) {
  for (let j = nums.length - i; 0 < j; --j) {
    if (nums[j] < nums[j - 1]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
    }
  }
  console.log(nums);
}

// ? We can use two pointer here.

const removeDuplicates = function (nums: Array<number>) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[j]) {
      nums[j + 1] = nums[i];
      j++;
    }
  }
  return j + 1;
};

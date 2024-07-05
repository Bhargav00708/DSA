/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let demo = nums[0];
  for (let i = 1; i < nums.length; i++) {
    demo ^= nums[i];
  }
  return demo;
};

console.log(singleNumber([2, 2, 1]));

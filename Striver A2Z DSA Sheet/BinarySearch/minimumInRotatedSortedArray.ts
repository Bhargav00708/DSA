/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums: number[]) {
  let firstPointer = 0;
  let secondPointer = nums.length - 1;
  let min = Infinity;
  if (nums.length == 1) {
    return nums[0];
  }
  while (firstPointer <= secondPointer) {
    let mid = Math.floor((firstPointer + secondPointer) / 2);
    if (nums[mid] >= nums[firstPointer]) {
      min = Math.min(min, nums[firstPointer]);
      firstPointer = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      secondPointer = mid - 1;
    }
  }
  return min;
};


// ? 2nd question Find out how many times the array has been rotated
// ? if we find the minimum element's index so that times array has been sorted.


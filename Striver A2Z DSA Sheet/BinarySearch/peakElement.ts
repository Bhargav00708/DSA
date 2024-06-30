/**
 * @param {number[]} nums
 * @return {number}
 */

// ! Here at the end we always find the peak element.
var findPeakElement = function (nums: number[]) {
  let firstPointer = 0;
  let secondPointer = nums.length - 1;
  let mid = Math.floor((firstPointer + secondPointer) / 2);
  while (firstPointer < secondPointer) {
    if (mid == 0) {
      return nums[mid] > nums[mid + 1] ? mid : mid + 1;
    } else if (mid == nums.length - 1) {
      return nums[mid] > nums[mid - 1] ? mid : mid - 1;
    } else if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid - 1] > nums[mid]) {
      secondPointer = mid - 1;
    } else {
      firstPointer = mid + 1;
    }
    mid = Math.floor((firstPointer + secondPointer) / 2);
  }
  return mid;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

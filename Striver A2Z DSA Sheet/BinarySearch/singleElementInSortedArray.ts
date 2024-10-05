/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums: number[]) {
  let start = 0;
  let end = nums.length - 1;
  let mid: number = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]) {
      return nums[mid];
    }
    if (mid % 2 == 0) {
      nums[mid] == nums[mid + 1] ? (start = mid + 1) : (end = mid - 1);
    } else {
      nums[mid] == nums[mid - 1] ? (start = mid + 1) : (end = mid - 1);
    }
  }
  return nums[mid];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

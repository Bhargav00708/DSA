var search = function (nums: number[], target: number) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] >= nums[start]) {
      // For arr = [8,8,10,11,12] & target = 8 (nums[start] <= target)
      if (nums[mid] > target && nums[start] <= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // For arr = [16,17,10,11,12] & target = 12 (target <= nums[end])
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
};

console.log(search([1, 0, 1, 1, 1], 0));

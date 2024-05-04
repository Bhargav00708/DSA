var search = function (nums: number[], target: number) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] >= nums[start]) {
      if (nums[mid] > target && nums[start] <= target) {
        // nums[start] <= target
        //[0,1,2] if target is 0 for this kind of condition
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        // target <= nums[end]
        //[7,0,1,2] if target is 2 for this kind of condition
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

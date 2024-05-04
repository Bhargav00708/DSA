function search(nums: number[], target: number): boolean {
  let startPointer: number = 0;
  let endPointer: number = nums.length - 1;
  let mid: number = Math.floor((startPointer + endPointer) / 2);
  while (startPointer <= endPointer) {
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] >= nums[startPointer]) {
      if (nums[mid] > target && nums[startPointer] <= target) {
        endPointer = mid - 1;
      } else {
        startPointer = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[endPointer]) {
        startPointer = mid + 1;
      } else {
        endPointer = mid - 1;
      }
    }
    mid = Math.floor((startPointer + endPointer) / 2);
  }
  return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 2));

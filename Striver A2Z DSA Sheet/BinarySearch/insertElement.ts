var searchInsert = function (nums: number[], target: number) {
  if (nums[0] >= target) {
    return 0;
  }
  let firstPointer = 0;
  let secondPointer = nums.length - 1;
  let mid = Math.floor((firstPointer + secondPointer) / 2);
  while (firstPointer <= secondPointer) {
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      secondPointer = mid - 1;
      mid = Math.floor((firstPointer + secondPointer) / 2);
    } else {
      firstPointer = mid + 1;
      mid = Math.floor((firstPointer + secondPointer) / 2);
    }
  }
  return mid + 1;
};

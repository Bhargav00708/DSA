var searchInsert = function (nums, target) {
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

console.log(searchInsert([1, 2, 3, 4, 8, 10], 7));

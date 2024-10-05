// ? Here if we want zero in end so we can move non-zero element in starting

var moveZeroes = function (nums: Array<number>) {
  let firstPointer = nums.indexOf(0);

  if (firstPointer === -1) {
    return;
  }
  let secondPointer = firstPointer + 1;

  while (secondPointer < nums.length) {
    if (nums[secondPointer] != 0) {
      nums[firstPointer] = nums[secondPointer];
      nums[secondPointer] = 0;
      ++secondPointer;
      ++firstPointer;
    } else {
      ++secondPointer;
    }
  }
};

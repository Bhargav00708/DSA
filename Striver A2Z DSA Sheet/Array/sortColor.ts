// ? Dutch national flag algorithms
const sortColors = function (nums: number[]) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        var temp = nums[low];
        nums[low] = nums[mid];
        nums[mid] = temp;
        mid++;
        low++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        var temp = nums[high];
        nums[high] = nums[mid];
        nums[mid] = temp;
        high--;
        break;
    }
  }
};
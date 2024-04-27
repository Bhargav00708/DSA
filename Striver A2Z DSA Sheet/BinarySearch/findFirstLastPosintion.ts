var searchRange = function (nums: number[], target: number) {
  let start = 0;
  let end = nums.length - 1;
  let mid: number;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    nums[mid] >= target ? (end = mid) : (start = mid + 1);
  }
  if (nums[start] != target) {
    return [-1, -1];
  }
  // Here we can use the end also because 
  let firstReturn = start;
  end = nums.length - 1;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    nums[mid] <= target ? (start = mid + 1) : (end = mid);
  }
  let endReturn = nums[end] == target ? end : end - 1;
  return [firstReturn, endReturn];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 9));

// nums[mid] <= target ? (start = mid + 1) : (end = mid);
// nums[mid] >= target ? (end = mid) : (start = mid + 1);

// Here both conditions are same and the only difference is that in first condition if 8 <= 8 then
// start = mid + 1 will be called and in second condition end = mid will be called.
// first condition is useful for find the first element while second condition are useful to find the last element

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let map = new Map();
  let count = 0;
  let sum = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      nums[i] = 0;
    } else {
      nums[i] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }
  return count;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));

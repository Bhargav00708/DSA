// ? We can use hashmap here.

var subarraySum = function (nums, k) {
  let mapOp = new Map();
  mapOp.set(0, 1);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (mapOp.has(sum - k)) {
      count += mapOp.get(sum - k);
    }
    if (mapOp.has(sum)) {
      mapOp.set(sum, mapOp.get(sum) + 1);
    } else {
      mapOp.set(sum, 1);
    }
  }
  return count;
};

console.log(subarraySum([0, 0, 1, 2, 3], 0));

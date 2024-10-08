var threeSum = function (nums: number[]) {
  let allTriplet: number[][] = [];
  if (nums.length < 3) {
    return allTriplet;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      continue;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      // i think we can also do nums[i] === nums[i+1]
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        allTriplet.push([nums[i], nums[j], nums[k]]);
        while (nums[j] == nums[j + 1]) {
          j++;
        }
        while (nums[k] == nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum > 0) {
        --k;
      } else {
        j++;
      }
    }
  }
  return allTriplet;
};

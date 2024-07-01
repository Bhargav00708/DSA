function majorityElement(nums) {
  let mejorityElement;
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (count === 0) {
      mejorityElement = nums[i];
    } else if (nums[i] === mejorityElement) {
      ++count;
    } else {
      --count;
    }
  }
  return mejorityElement;
}

majorityElement([3, 3, 4]);

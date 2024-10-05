function smallestDivisor(nums: number[], threshold: number): number {
  let low = 1;
  let high = Math.max(...nums);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalQuotient = 0;
    for (let i = 0; i < nums.length; ++i) {
      const quotient = Math.ceil(nums[i] / mid);
      totalQuotient += quotient;
    }
    if (totalQuotient <= threshold) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

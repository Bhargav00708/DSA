// leetcode 1011
// Properly not working
function shipWithinDays(weights: number[], days: number) {
  const sum = weights.reduce((acc, data) => {
    return acc + data;
  });

  if (days === 1) {
    return sum;
  }

  let low = Math.min(...weights);
  let high = sum;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < weights.length; ++i) {
      sum += weights[i];
      if (sum === mid) {
        sum = 0;
        ++count;
      } else if (i !== weights.length - 1 && sum + weights[i + 1] > mid) {
        sum = 0;
        ++count;
      }
    }
    ++count;
    if (weights[weights.length - 1] > mid) {
      low = mid + 1;
    } else if (count <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

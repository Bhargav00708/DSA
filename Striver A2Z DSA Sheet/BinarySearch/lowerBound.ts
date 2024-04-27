// [1,5,7,8,9] if x = 8
// lower bound is 3 index arr[i] >= x 

function lowerBound(arr: number[], n: number, x: number) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] >= x) {
      ans = mid;
      // look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

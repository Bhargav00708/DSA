// [1,5,7,8,9] if x = 8
// lower bound is 3 index arr[i] >= x

function lowerBound(arr: number[], n: number, x: number) {
  let low = 0,
    high = n - 1;
  let mid = Math.floor((low + high) / 2);
  while (low <= high) {
    // maybe an answer
    if (arr[mid] >= x) {
      // look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
    mid = Math.floor((low + high) / 2);
  }
  return mid + 1;
}

// Just like insert an element.

console.log(lowerBound([1, 5, 7, 8, 9], 5, 7));

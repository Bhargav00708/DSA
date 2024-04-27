// ?  Less optimise then kadne's algorithms.
function maxSubarraySum(arr: number[], n: number) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      // current subarray = arr[i.....j]

      //add the current element arr[j]
      // to the sum i.e. sum of arr[i...j-1]
      sum += arr[j];

      maxi = Math.max(maxi, sum); // getting the maximum
    }
  }

  return maxi;
}

maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 9);

// // ? Kadnes algorithms

// const maxSubArray = function (nums: Array<number>) {
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(0, nums[i - 1]) + nums[i];
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// };

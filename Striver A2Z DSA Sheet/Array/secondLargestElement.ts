// Here are many approaches like

// 1) Sort and then find the second largest => O(nlogn) (time)
// 2) Do two loop first one is to find largest and second one is the smallest then large but large then current.
// => o(n) + o(n) => 2o(n) is equivalent to o(n) (time)
// 3) Take 2 variable Large and Second Large => o(n) (time)

// ? second approach

// const arr = [1,2,0,9,8];

// let small = Infinity;
// let second_small = Infinity;
// let large = -Infinity;
// let second_large = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   small = Math.min(small, arr[i]);
//   large = Math.max(large, arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < second_small && arr[i] !== small)
//     second_small = arr[i];
//   if (arr[i] > second_large && arr[i] !== large)
//     second_large = arr[i];
// }

// console.log("Second smallest is " + second_small);
// console.log("Second largest is " + second_large);

//? third approach

const nums: Array<number> = [1, 0, -9, 8, 67, 69, 70];
let large: number = nums[0];
let second_largest: number = nums[0];
let small: number = nums[0];
let second_smallest: number = nums[0];

for (let i = 0; i < nums.length; ++i) {
  if (nums[i] > large) {
    second_largest = large;
    large = nums[i];
  } else if (nums[i] > second_largest) {
    second_largest = nums[i];
  }
  if (small > nums[i]) {
    second_smallest = small;
    small = nums[i];
  } else if (nums[i] < second_smallest) {
    second_smallest = nums[i];
  }
}

console.log(second_largest, second_smallest);

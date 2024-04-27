const nums = [-1, 0, 3, 5, 9, 12];
const foundNum = 12;
let firstPointer = 0;
let secondPointer = nums.length - 1;
while (firstPointer <= secondPointer) {
  const mid = Math.floor((firstPointer + secondPointer) / 2);
  if (nums[mid] === foundNum) {
    console.log(true);
  } else if (nums[mid] > foundNum) {
    secondPointer = mid - 1;
  } else {
    firstPointer = mid + 1;
  }
}
console.log(false);

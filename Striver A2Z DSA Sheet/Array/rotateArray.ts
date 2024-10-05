// ! We can use this formula k % nums.length

const rotate = function (nums: Array<number>, k) {
  let divider = k % nums.length;
  let leftArr = nums.splice(0, nums.length - divider);
  nums.push(...leftArr);
};

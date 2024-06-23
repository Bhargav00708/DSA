// ! Recursive approach.
var subsets = function (nums) {
  let res = []; // the final arr, which we will display
  let auxArr = [];
  var i = 0; // global vars

  function recur(nums, i, auxArr) {
    if (i == nums.length) {
      res.push(auxArr);
      return;
    } //operation of recursion will be upto i=n-1
    // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

    // take it
    // ! this is for to take the particular number.
    recur(nums, i + 1, [...auxArr, nums[i]]); //or, we can use 'aux.concat(nums[i])'

    // dont take
    // ! this is for to avoid that number.
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr); // passing the global variable declared already
  return res; // return the final 2d arr
};

console.log(subsets([1, 2, 3]));

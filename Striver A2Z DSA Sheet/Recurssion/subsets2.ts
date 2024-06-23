var subsetsWithDup = function (nums: number[]) {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);

  function f(index: number, t: number[]) {
    ans.push([...t]);

    for (let i = index; i < nums.length; i++) {
      // ! here i !== index is useful for [1,1,2] so in first loop we have to run [1,2] but in second loop
      // ! we have to prevent it.
      if (i !== index && nums[i] === nums[i - 1]) continue;
      t.push(nums[i]);
      f(i + 1, t);
      t.pop();
    }
  }

  f(0, []);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2]));

// very easy approach like subset1
// second approach like subset sum1

// ! Recursive approach.
var subsets = function (nums: Array<number>) {
  let res: number[][] = []; // the final arr, which we will display
  let auxArr: Array<number> = [];
  var i = 0; // global vars

  function recur(nums: Array<number>, i: number, auxArr: Array<number>) {
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
    // ! here like if there is [1,2,2,3] so in right side we have to avoid that number so we directly jump to
    // ! index 2 and skipping index 1 and we only have to check till second last element that's why
    // ! take this condition i+2
    while (i + 2 !== nums.length && nums[i] === nums[i + 1]) {
      ++i;
    }
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr); // passing the global variable declared already
  return res; // return the final 2d arr
};

console.log(subsets([1, 2, 2, 3]));

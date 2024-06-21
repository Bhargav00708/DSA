var subsetsWithDup = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);

  function f(index, t) {
    ans.push([...t]);

    for (let i = index; i < nums.length; i++) {
      // ! here i !== index is useful for [1,2,2] so in first loop we have to run [1,2] but in second loop
      // ! we have to prevent it.
      if (i !== index && nums[i] === nums[i - 1]) {
        continue;
      }
      t.push(nums[i]);
      f(i + 1, t);
      t.pop();
    }
  }

  f(0, []);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2]));

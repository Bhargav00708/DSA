// This approach is not working properly

var combinationSum2 = function (candidates: number[], target: number) {
  if (!candidates || candidates.length == 0) return [];
  let res: number[][] = [];
  candidates.sort((a, b) => a - b);
  var helper = function (curSum: number, cur: Array<number>, index: number) {
    if (curSum == target) {
      res.push([...cur]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (i != index && candidates[i] == candidates[i - 1]) continue; //already return, go next loop(not recursion)
      if (curSum > target) return;
      cur.push(candidates[i]);
      helper(curSum + candidates[i], cur, i + 1);
      cur.pop();
    }
  };
  helper(0, [], 0);
  return res;
};

console.log(combinationSum2([2, 3, 6, 7], 7));

// very easy approach like combinationsum1
// second approach like combibation sum1

function combinationSum(candidates: number[], target: number) {
  var buffer: any = [];
  var result: any = [];
  search(0, target);
  return result;

  function search(startIdx: any, target: any) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    // ! this is for to avoid that number.
    // ! here like if there is [1,2,2,3] so in right side we have to avoid that number so we directly jump to
    // ! index 2 and skipping index 1 and we only have to check till second last element that's why
    // ! take this condition i+2
    while (
      startIdx + 2 !== candidates.length &&
      candidates[startIdx] === candidates[startIdx + 1]
    ) {
      ++startIdx;
    }
    search(startIdx + 1, target);
  }
}

console.log(combinationSum([1, 2, 2, 2, 3, 6, 7], 8));

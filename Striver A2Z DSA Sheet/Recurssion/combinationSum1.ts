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
    search(startIdx + 1, target);
  }
}

console.log(combinationSum([2, 3, 6, 7], 7));
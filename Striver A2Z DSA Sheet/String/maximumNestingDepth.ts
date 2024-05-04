/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s:string) {
  let maxCount = 0;
  let count = 0;
  for (let data of s) {
    if (data == `(`) {
      ++count;
      maxCount = Math.max(count, maxCount);
    } else if (data == ")") {
      --count;
    }
  }
  return maxCount;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));

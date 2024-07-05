/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */

// like if i have 4 (100) and 3 (011) so if i want to convert 4 to 3 in binary so i have to flip 3 bit means
// in xor you will get 1 when both bit are not same 

var minBitFlips = function (start: number, goal: number): number {
  let result = (start ^ goal).toString(2);
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "1") {
      ++count;
    }
  }
  return count;
};

console.log(minBitFlips(4,3));


/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let total = 0;
  let max = -Infinity;
  for (let data of cardPoints) {
    total += data;
  }
  let right = cardPoints.length - k;
  let left = 0;
  let firstTotal = 0;
  for (let i = right; i < cardPoints.length; ++i) {
    firstTotal += cardPoints[i];
  }
  max = firstTotal;
  let tempTotal = 0;
  let winSum = total - firstTotal;
  while (right < cardPoints.length) {
    // here in temp total we are taking that some which we don't want.
    // so in last we are subtracting it with total element by doing that we can find out that k number card pick 
    tempTotal = winSum + cardPoints[right] - cardPoints[left];
    winSum = tempTotal;
    tempTotal = total - tempTotal;
    max = Math.max(max, tempTotal);
    ++right;
    ++left;
  }
  return max;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));

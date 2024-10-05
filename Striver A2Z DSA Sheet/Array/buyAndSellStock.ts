// ? Dp problem
const maxProfit = function (prices: number[]) {
  var firstPointer = 0;
  var secondPointer = 1;
  let maxPrice = 0;
  while (secondPointer < prices.length) {
    let priceDif = prices[secondPointer] - prices[firstPointer];
    if (priceDif > 0) {
      if (priceDif >= maxPrice) {
        maxPrice = priceDif;
      }
      ++secondPointer;
    } else {
      firstPointer = secondPointer;
      secondPointer = secondPointer + 1;
    }
  }
  return maxPrice;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

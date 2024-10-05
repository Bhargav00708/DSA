// const piles = [3, 6, 7, 11];
// const h = 5;

// for (let j = 1; j <= Infinity; ++j) {
//   let count = 0;
//   for (let i = 1; i <= piles.length; ++i) {
//     count += Math.ceil(piles[i - 1] / j);
//   }
//   if (count <= h) {
//     console.log(j);
//     break;
//   }
// }

// Here we are using brute force approach in above problem but we can also use BS on this
// because here maximum in worst case we can get 11 so we can bs on 1 to 11

const minEatingSpeed = (piles: any, h: any) => {
  let min = 1,
    max = Math.max(...piles),
    best = max;

  const time = (speed: any) =>
    piles.reduce((sum: any, pile: any) => sum + Math.ceil(pile / speed), 0);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (time(mid) <= h) {
      best = mid;
      max = mid - 1;
    } else min = mid + 1;
  }

  return best;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));

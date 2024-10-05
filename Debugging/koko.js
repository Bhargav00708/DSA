// const piles = [3, 6, 7, 11];
// const h = 8;

// for (let j = 1; j <= Infinity; ++j) {
//   let count = 0;
//   for (let i = 1; i <= piles.length; ++i) {
//     count += Math.ceil(piles[i - 1] / j);
//   }
//   if (count < h) {
//     console.log(j);
//     break;
//   }
// }

const piles = [3, 6, 7, 11];
const h = 5;
let max = piles[0];
for (let i = 1; i < piles.length; ++i) {
  max = piles[i] > max ? piles[i] : max;
}
const arrPointer = [];
for (let i = 1; i <= max; ++i) {
  arrPointer.push(i);
}
let left = 0;
let right = arrPointer.length - 1;
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;
  for (let i = 1; i <= piles.length; ++i) {
    count += Math.ceil(piles[i - 1] / arrPointer[mid]);
  }
  if (h === count) {
    console.log(piles[mid]);
    break;
  } else if (count <= h) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

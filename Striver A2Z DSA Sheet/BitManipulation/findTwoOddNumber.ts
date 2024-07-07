// Here the main objective is if we do all of it's element x or so we find one number
// and we have to look 1 in it, it means that at that index both odd number's value is different
// means 0 and 1 so we can x or with other numbers as well at that index means at that index with
// 0 numbers and 1 numbers so we can find two diferent numbers.

const nums = [1, 1, 3, 5, 6, 6];
let xOr = nums[0];

for (let i = 1; i < nums.length; ++i) {
  xOr ^= nums[i];
}

let xOrString = xOr.toString(2);
let misMatchIndex: any;

for (let i = 0; i < xOrString.length; ++i) {
  if (xOrString[i] === `1`) {
    misMatchIndex = i;
    break;
  }
}

let zeroNumberIndex: Array<number> = [];
let oneNumberIndex: Array<number> = [];

for (let i = 0; i < nums.length; ++i) {
  const binNumber = nums[i].toString(2);
  if (binNumber[misMatchIndex] === `0`) {
    zeroNumberIndex.push(nums[i]);
  } else {
    oneNumberIndex.push(nums[i]);
  }
}

let answer: number = 0;
for (let i = 0; i < zeroNumberIndex.length; ++i) {
  answer ^= zeroNumberIndex[i];
}

console.log(answer);

answer = 0;

for (let i = 0; i < oneNumberIndex.length; ++i) {
  answer ^= oneNumberIndex[i];
}

console.log(answer);

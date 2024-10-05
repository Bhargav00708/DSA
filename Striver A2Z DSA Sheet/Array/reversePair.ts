// We can use merge sort striver video
// leetcode 493
const num = [-5, -5];
let count = 0;
for (let i = 0; i < num.length - 1; ++i) {
  for (let j = i + 1; j < num.length; ++j) {
    if (num[i] > num[j]) {
      count = num[i] > 2 * num[j] ? ++count : count;
    }
  }
}

console.log(count);

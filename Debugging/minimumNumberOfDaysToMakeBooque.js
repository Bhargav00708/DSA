// 1482
function minDays(bloomDay, m, k) {
  if (m * k > bloomDay.length) {
    console.log(-1);
  }
  let start = Math.min(...bloomDay);
  let end = Math.max(...bloomDay);
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const takeNum = mid;
    let counter = 0;
    let ans = 0;
    for (let i = 0; i < bloomDay.length; ++i) {
      if (bloomDay[i] <= takeNum) {
        ++counter;
      } else {
        if (counter >= k) {
          ++ans;
        }
        counter = 0;
      }
    }
    if (ans >= m) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

console.log(minDays([1, 10, 3, 10, 2], 3, 1));

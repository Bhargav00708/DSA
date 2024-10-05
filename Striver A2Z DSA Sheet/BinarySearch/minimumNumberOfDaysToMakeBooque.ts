// 1482
// Here we know that answer lie between min and max of bloom array so
// we are taking mid and checking that for that particular number like between 1 and 5 so mid
// will be 5, so for 5 we can make that or not and if we so reduce by 1 and not so + 1 and low will
//  be the answer
function minDays(bloomDay: number[], m: number, k: number): number {
  if (m * k > bloomDay.length) {
    return -1;
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
    if (counter >= k) {
      ++ans;
    }
    if (ans >= m) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

console.log(minDays([1, 10, 3, 10, 2], 3, 2));

var merge = function (intervals: number[][]) {
  intervals.sort((a, b) => a[0] - b[0]);
  let returnedArray = [intervals[0]];
  let pointer = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (returnedArray[pointer][1] >= intervals[i][0]) {
      returnedArray[pointer] = [
        returnedArray[pointer][0],
        Math.max(returnedArray[pointer][1], intervals[i][1]),
      ];
    } else {
      returnedArray.push(intervals[i]);
      ++pointer;
    }
  }
  return returnedArray;
};

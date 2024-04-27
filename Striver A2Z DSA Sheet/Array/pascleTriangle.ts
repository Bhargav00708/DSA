var generate = function (numRows: number) {
  let returnArray = [[1], [1, 1]];
  if (numRows == 1) {
    return [returnArray[0]];
  }
  if (numRows == 2) {
    return returnArray;
  }
  for (let i = 2; i < numRows; i++) {
    let newArray: number[] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        newArray[j] = 1;
        continue;
      }
      newArray.push(returnArray[i - 1][j] + returnArray[i - 1][j - 1]);
    }
    returnArray.push(newArray);
  }
  return returnArray;
};

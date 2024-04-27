/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix: number[][]) {
  let allZeroData: number[] = [];
  let allZeroRowData: number[] = [];
  for (let j = 0; j < matrix.length; j++) {
    let flag = false;
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] == 0) {
        allZeroData.push(i);
        flag = true;
      }
    }
    if (flag) {
      allZeroRowData.push(j);
    }
  }
  console.log(allZeroRowData);
  for (let i = 0; i < allZeroData.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][allZeroData[i]] = 0;
    }
  }
  for (let i = 0; i < allZeroRowData.length; i++) {
    for (let j = 0; j < matrix[allZeroRowData[i]].length; j++) {
      matrix[allZeroRowData[i]][j] = 0;
    }
  }
};

// ! we can also do this by not counting first row and first column

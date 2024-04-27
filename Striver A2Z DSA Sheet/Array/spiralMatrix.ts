var spiralOrder = function (matrix: number[][]) {
  let arrData: number[] = [];
  let [top, bottom, left, right] = [
    0,
    matrix.length - 1,
    0,
    matrix[0].length - 1,
  ];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      arrData.push(matrix[top][i]);
    }
    ++top;
    for (let i = top; i <= bottom; i++) {
      arrData.push(matrix[i][right]);
    }
    --right;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        arrData.push(matrix[bottom][i]);
      }
    }
    --bottom;
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        arrData.push(matrix[i][left]);
      }
    }
    ++left;
  }
  return arrData;
};

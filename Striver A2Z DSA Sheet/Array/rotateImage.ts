var rotate = function (matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let firstPointer = 0;
    let secondPointer = matrix[i].length - 1;
    for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
      let temp = matrix[i][secondPointer];
      matrix[i][secondPointer] = matrix[i][firstPointer];
      matrix[i][firstPointer] = temp;
      ++firstPointer;
      --secondPointer;
    }
  }
  return matrix;
};

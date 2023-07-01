function isSubmatrixInMatrix(
  matrix,
  firstRowIndex,
  firstColumnIndex,
  submatrix
) {
  return submatrix.every((submatrixRow, submatrixRowIndex) => {
    return submatrixRow.every((submatrixElement, submatrixColumnIndex) => {
      const matrixRow = matrix[firstRowIndex + submatrixRowIndex];
      const matrixElement = matrixRow[firstColumnIndex + submatrixColumnIndex];

      return matrixElement === submatrixElement;
    });
  });
}

function countSubmatrixInMatrix(matrix, submatrix) {
  const lastRowIndex = matrix.length - submatrix.length;
  let count = 0;

  for (let rowIndex = 0; rowIndex <= lastRowIndex; rowIndex += 1) {
    const matrixRow = matrix[rowIndex];
    const submatrixRow = submatrix[0];
    const lastColumnIndex = matrixRow.length - submatrixRow.length;

    for (
      let columnIndex = 0;
      columnIndex <= lastColumnIndex;
      columnIndex += 1
    ) {
      if (isSubmatrixInMatrix(matrix, rowIndex, columnIndex, submatrix)) {
        count += 1;
      }
    }
  }

  return count;
}

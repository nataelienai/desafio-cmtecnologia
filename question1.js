function invertDiagonalsOfSquareMatrix(matrix) {
  if (matrix.length < 2) {
    return matrix;
  }

  matrix.forEach((row, index) => {
    const primaryDiagonalPosition = index;
    const secondaryDiagonalPosition = row.length - 1 - index;
    const primaryDiagonalValue = row[primaryDiagonalPosition];
    const secondaryDiagonalValue = row[secondaryDiagonalPosition];

    row[primaryDiagonalPosition] = secondaryDiagonalValue;
    row[secondaryDiagonalPosition] = primaryDiagonalValue;
  });
}

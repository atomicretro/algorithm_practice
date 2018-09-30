const isToeplitzMatrix = function(matrix) {
  let previousRow = matrix[0].slice(0);
  let rowLength = previousRow.length;
  for(let currentRowIdx = 1; currentRowIdx < matrix.length; currentRowIdx++) {
    for(let elementIdx = rowLength - 1; elementIdx > 0; elementIdx--) {
      if(matrix[currentRowIdx][elementIdx] === previousRow[elementIdx - 1]) {
        previousRow[elementIdx] = matrix[currentRowIdx][elementIdx];
      } else {
        return false;
      };
    };
    previousRow[0] = matrix[currentRowIdx][0];
  };
  return true;
};

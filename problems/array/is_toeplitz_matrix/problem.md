# Is Toeplitz Matrix?
## Problem
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Given an `n * m` matrix, return `true` if and only if the matrix is Toeplitz.

**Note:**
* `matrix` will be a 2D array of integers.
* `matrix` will have a number of rows and columns in range `[1, 20]`.
* `matrix[i][j]` will be integers in range `[0, 99]`.

**Bonus:** What if the matrix is stored on disk, and memory is limited such that you can only load at most one row of the matrix into memory at once?


### Example 1:
```
Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
[9], [5, 5], [1, 1, 1], [2, 2, 2], [3, 3], [4]
In each diagonal all elements are the same, so the answer is True.
```

### Example 2:
```
Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal [1, 2] has different elements.
```

## Solution
### JavaScript
```javascript
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
```

## Explanation
### Reasoning
To solve the bonus constraint, I cannot keep two rows of the matrix in memory at the same time, comparing and swapping elements between the two. Instead, I elected to keep only the previous row stored in memory, as I can step through the current row comparing one element at a time to the stored row. The elements `[1..n-1]` of row `i + 1` (`currentRow`) are equivalent to the elements `[0..n-2]` of row `i` (`previousRow`). Therefore, evaluating whether a matrix is Toeplitz becomes a simple matter of checking the element at `currentRow[j]` against the element at `previousRow[j - 1]`. As the last element of `previousRow` is always in its own diagonal, it does not get checked against any element from `currentRow`. If `currentRow[j]` is equivalent to `previousRow[j - 1]`, we have a Toeplitz diagonal. I then reassign `previousRow[j] = currentRow[j]` so we can continue the comparison with row `i + 2` later on. If at any time `currentRow[j]` is NOT equivalent to `previousRow[j - 1]`, I immediately return false as the matrix cannot be Toeplitz.

![diagram showing the the elements `[1..n-1]` of row `i + 1` are equivalent to the elements `[0..n-2]` of row `i`](./toeplitz_diagram.png)

### Analysis
Time Complexity: `O(n * m)`
* For `true` Toeplitz matrices (and worst-case `false` ones), this algorithm will step through not only each row of the input `matrix` minus 1 (`n`), but also each element in those rows (`m`), resulting in a time complexity of `O(n * m)`.

Space Complexity: `O(n)`
* This algorithm creates a shallow copy of the first row of the input `matrix`. Therefore, its space complexity will be `O(n)`, where `n === matrix[0].length`.

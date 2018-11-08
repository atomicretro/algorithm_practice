# Reshape The Matrix
## Problem
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into one of a different size but with the original data.

In this problem, you're given a matrix represented by a two-dimensional array, and two positive integers `r` and `c` representing the row number and column number of the desired reshaped matrix, respectively.

The reshaped matrix needs to be filled with all the elements of the original matrix in the same **row-traversing** order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; otherwise, output the original matrix.

**Note:**
* The height and width of the given matrix is in range `[1, 100]`.
* The given `r` and `c` are all positive.

### Example 1:
```
Input: nums =
  [
    [1,2],
    [3,4]
  ]
r = 1, c = 4
Output: [[1,2,3,4]]
Explanation:
The row-traversing order of nums is [1,2,3,4].
The new reshaped matrix is a 1 * 4 matrix.
```

### Example 2:
```
Input: nums =
  [
    [1,2],
    [3,4]
  ]
r = 2, c = 4
Output: [
  [1,2],
  [3,4]
]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix.
```

## Solution
### JavaScript
```javascript
const matrixReshape = function(nums, r, c) {
  let elements = 0;
  nums.forEach((row) => elements += row.length);
  if(elements !== r * c) return nums;

  let reshaped = [];
  let insertIdx = 0;
  for(let i = 0; i < r; i++) reshaped.push([]);
  nums.forEach((row) => {
    row.forEach((column) => {
      reshaped[insertIdx].push(column);
      if(reshaped[insertIdx].length >= c) insertIdx++;
    });
  });
  return reshaped;
};
```

## Explanation
### Reasoning
For a given matrix `n * m`, the only legal reshapings would be matricies whose sizes were valid factors of the product of `n * m` (e.g. given a matrix of `2 * 5`, the only valid reshapings would be valid factors of `2 * 5 = 10`: `1 * 10`, `5 * 2`, and `10 * 1`, ignoring the original shape). Thus, the first thing I do is step through each `row` of the input matrix once, counting the length of the row (which would equal the number of elements contained therein). If the total number of elements doesn't equal the product of `r * c`, I know it would be impossible to reshape the given matrix with the given parameters, and I immediately return the false condition of the original matrix.

Considering scenarios where a reshape is possible is more interesting. To keep this solution purely functional I declare an empty array, `reshaped`, and fill it in turn with a number of empty arrays equal to `r`. This sets up `reshaped` to initially have the correct number of rows needed, and allows me to key into those rows later. I then step through each individual element in `nums` (here represented by the variable `column`) by nesting two `forEach` loops. Keeping track of where each element should go in the reshaped matrix with the counter variable `insertIdx`, I `push` each element into `reshaped` in the correct row-traversing order. I keep the correct row-traversing order thanks to my `forEach` loops -- due to the nesting, I step through each element in ascending index order of each row in ascending index order. When `insertIdx` is equal to `c`, this tells me that the reshaped row I'm currently working in is filled, and it's time to move onto the next one. I do this by incrementing `insertIdx` by one at the proper time.

After I've stepped through every element of the original matrix, I return `reshaped`.

### Analysis
Time Complexity: `O(n * m)`
* This algorithm must step through each element of the input matrix `nums`. Because `nums` is a two-dimensional array, and becuase those dimensions do not that to be equal, stepping through each element of `nums` will take `(n * m)` time, where `n` is the number of rows in `nums` and `m` is the numebr of columns.

Space Complexity: `O(n)`
* To keep this algorithm purely functional, I create a new reshaped matrix to return instead of reshaping `nums` in-place. This results in the need to create a new two-dimensional array exactly `n` elements big, where `n` is the number of total elements in `nums`.

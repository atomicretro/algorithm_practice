# Is Monotonic Array?
## Problem
An array is _monotonic_ if it is either monotone increasing or monotone decreasing.

An array `A` is monotone increasing if for all `i <= j`, `A[i] <= A[j]`.  An array `A` is monotone decreasing if for all `i <= j`, `A[i] >= A[j]`.

Return `true` if and only if the given array `A` is monotonic.

### Example 1:
```
Input: [1,2,2,3]
Output: true
```

### Example 2:
```
Input: [6,5,4,4]
Output: true
```

### Example 3:
```
Input: [1,3,2]
Output: false
```

### Example 4:
```
Input: [1,1,1]
Output: true
```

## Solution
### JavaScript
```javascript
const isMonotonic = function(A) {
  let difference = A[0] - A[A.length - 1];
  let direction =
    difference === 0 ? 'flat' : ( difference < 0 ? 'up' : 'down' );

  for(let i = 0; i < A.length - 1; i++) {
    switch(direction) {
      case 'up':
        if(A[i+1] < A[i]) return false;
        break;
      case 'down':
        if(A[i+1] > A[i]) return false;
        break;
      case 'flat':
        if(A[i+1] !== A[i]) return false;
        break;
    };
  };

  return true;
};
```

## Explanation
### Reasoning
Because a monotonic array cannot reverse the direction of its change of value (e.g. the elements can never go `2` => `3` => `2`), I know that the difference in direction between the first and last element must remain true for all elements for an array to be monotonic. Thus, my first step is finding that difference, then defining it as `up`: the elements experience a net increase in value; `down`: the elements experience a net decrease in value; or `flat`: there is no change in value in the elements over the array. Once that direction is defined it is a simple matter of stepping through the array and comparing each subsequent element to the previous. If the direction of the change in value between elements does not match the direction of the change in value between the first and last element, the array is not monotonic.

### Analysis
Time Complexity: `O(n)`
* When the input array is monotonic this algorithm will step through each element in said array exactly once, causing the time complexity to be `O(n)`.

Space Complexity: `O(1)`
* No matter how big the input array is, the only three additional values that the algorithm stores is `difference`, `direction`, and `i` for the loop, giving it a space complexity of `O(1)`.

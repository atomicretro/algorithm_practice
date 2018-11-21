# Is Perfect Square?
## Problem
Given a positive integer `num`, write a function which returns `true` if `num` is a perfect square or `false` if it is not.

**Note:** Do not use any built-in library function such as `sqrt`.

### Example 1:
```
Input: 16
Output: true
```

### Example 2:
```
Input: 14
Output: false
```

## Solution
### JavaScript
```javascript
const isPerfectSquare = function(num) {
  if(num <= 0) return false;
  for(let i = 1; i <= num; i++) {
    let square = i * i;
    if(square === num) return true;
    if(square > num) return false;
  };
};
```

## Explanation
### Reasoning
For this problem I first immediately return `false` if the input `num` is less than or equal to `0`, as no number less than or equal to `0` can be a perfect square. After getting that edge case out of the way, I move onto the bulk of the algorithm. I enter a `for` loop that steps between `1` (the first possible perfect square) and `num`. On each iteration of the loop, I multiple the loop's index `i` by itself, squaring it. If at any point the square of `i` equals `num` I return true, as that means `num` is a perfect square; alternatively, if the square of `i` is ever greater than `num` I return `false`, as that means I've exhausted all the possible numbers that could square to `num` but haven't found one, meaning that `num` cannot be a perfect square.

### Analysis
Time Complexity: `O(log(n))`
* Because I'm doubling `power` on each iteration, it will take `O(log(n))` to either reach `num` or the first power that is larger than `num`.

Space Complexity: `O(1)`
* This algorithm stores no variables that increase in length with the input `num`.

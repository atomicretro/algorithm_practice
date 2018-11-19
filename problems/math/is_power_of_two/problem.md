# Is Power Of Two?
## Problem
Given an integer, write a function to determine if it is a power of two.

### Example 1:
```
Input: 1
Output: true
Explanation: 20 = 1
```

### Example 2:
```
Input: 16
Output: true
Explanation: 24 = 16
```

### Example 3:
```
Input: 218
Output: false
```

### Example 4:
```
Input: -16
Output: false
```

## Solution
### JavaScript
```javascript
const isPowerOfTwo = function(n) {
  let power = 1;
  while(power <= n) {
    if(power === n) return true;
    power *= 2;
  };
  return false;
};
```

## Explanation
### Reasoning
This problem is straightforward. I define a variable `power` to equal `1`. I then enter a `while` loop that runs until `power` is greater than or equal to the input `n`. I check at the beginning of each iteration if `power === n` to catch the edge case of when `n === 1` (as this will ensure I check if `power === 1` before reassigning the variable). If `power === n` I return `true`, otherwise I double `power` and begin the loop anew. The loop terminates if `power > n` as that means `n` cannot be a power of `2` (as, since `power` is doubling on each iteration, `power` would eventually be every power of `2` if allowed to run forever). If the loop terminates without finding a value for which `power === n`, the function returns `false`.

### Follow-up
After completing this function I searched around on the Internet for other answers. I found that most people answer this problem in reverse: they continuously modulo `n` by `2` until reaching `2` (or until `n % 2 !== 0`). This requires a few more checks for edge cases (my `while` loop, for instance, immediately rules out any input where `n <= 0`), but does ensure that `power` will never get **too** big. It is possible in my function, for example, for `power` to grow larger than `2^31 - 1`. If I were to build this answer out into a professional environment I would include a check to not double `power` again if it got close to that upper bound.

### Analysis
Time Complexity: `O(log(n))`
* Because I'm doubling `power` on each iteration, it will take `O(log(n))` to either reach `n` or the first power of `2` that is larger than `n`.

Space Complexity: `O(1)`
* This algorithm stores no variables that increase in length with the input `n`.

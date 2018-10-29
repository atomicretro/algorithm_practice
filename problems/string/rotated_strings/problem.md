# Rotated Strings
## Problem
We are given two strings, `A` and `B`.

A shift on `A` consists of taking string `A` and moving the leftmost character to the rightmost position. For example, if `A = 'abcde'`, then it will be `'bcdea'` after a single shift. Return `true` if and only if `A` can become `B` after some number of shifts on `A`.

### Example 1:
```
Input: A = 'abcde', B = 'cdeab'
Output: true
```

### Example 2:
```
Input: A = 'abcde', B = 'abced'
Output: false
```

## Solution
### JavaScript
```javascript
const rotatedStrings = function(A, B) {
  if(A.length !== B.length) return false;
  if(A === B) return true;
  let shifted = A;
  for(let i = 0; i < shifted.length; i++) {
    shifted = shifted.slice(1) + shifted.slice(0,1);
    if(shifted === B) return true;
  };
  return false;
};
```

## Explanation
### Reasoning
I first check the lengths of `A` and `B`, as if the lengths are different there is no number of shifts that can possibly turn `A` into `B`. I then check if `A` and `B` are already equivalent and return `true` if they are (as that would mean there are zero shifts required to turn `A` into `B`, which technically fulfills the problem's truth condition). I've chosen to check for disparate lengths before equivalency because I feel it's more probable for the two input strings to be of different lengths than for them to be exactly equal.

After I check those two base conditions, I define a new string, `shifted`, to be equal to `A`. I do this to keep the algorithm purely functional, though it does increase its space complexity. I then step through the length of `shifted`, redefining it on each iteration to move the character at index `0` to the end of the string. After each move, I check if `shifted` is equivalent to `B`. If it is, I return `true` immediately, and if not I begin the next iteration of the loop. If I am able to step through the entire length of `shifted` without ever having `shifted === B`, I know there is no number of shifts that can turn `A` into `B` so I return `false` and end the algorithm.

### Analysis
Time Complexity: `O(n)`
* In the worst-case scenario (where there is no number of shifts that can turn `A` into `B`) I step through the entire length of `A` (as `shifted`) one time, resulting in a time complexity of `O(n)`.

Space Complexity: `O(n)`
* To keep this algorithm purely functional, I define a new variable, `shifted`, to be equal to `A` before I start manipulating the order of the characters inside `shifted`. Because this will create a new array of length `A.length`, this algorithm's space complexity will grow in direct proportion to the length of `A`, causing it to have a space complexity of `O(n)`.

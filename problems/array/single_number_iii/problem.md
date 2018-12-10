# Single Number III
## Problem
Given an array of numbers `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

**Note:** The order of the result is not important.

### Example 1:
```
Input:  [1,2,1,3,2,5]
Output: [3,5]
```

## Solution
### JavaScript
```javascript
const singleNumber = function(nums) {
  let counter = {};
  nums.forEach((n) => {
    if(counter[n]) counter[n]++;
    else counter[n] = 1;
  });
  return nums.filter((n) => counter[n] === 1);
};
```

## Explanation
### Reasoning
The simple approach to this problem is to count the number of times each element appears in `nums` and return the elements which only appear once. To do this I initialize a counter hash `counter`, after which I step through `nums` and count each element. I then return a filtered array of each element of `nums` whose value `1` in `counter`.

### Analysis
Time Complexity: `O(n)`
* The above solution runs `2n` times, which approaches `n` at infinity.

Space Complexity: `O(n)`
* This solution creates a stores a counter hash of exactly `n` key-value pairs, where `n` is the length of `nums`.

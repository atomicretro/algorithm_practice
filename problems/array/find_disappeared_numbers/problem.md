# Find All Disappeared Numbers
## Problem
Given an array of integers where `1 ≤ a[i] ≤ n` (`n` = size of array), some elements appear twice and others appear once.

Find all the elements of `[1, n]` inclusive that do not appear in this array.

### Example 1:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

## Solution
```javascript
const findDisappearedNumbers = function(nums) {
  let results = [];
  let numsSet = new Set();
  nums.forEach((number) => {numsSet.add(number)});
  for(let i = 1; i < nums.length + 1; i++) {
    if(!numsSet.has(i)) results.push(i);
  };
  return results;
};
```

## Explanation
### Reasoning
My naive solution works fine, but it is slow and winds up using a lot of memory (breaking the bonus condition). I know that each element of `nums` will be a number between `1` and `nums.length`. Using that knowledge, I create a set (`numsSet`) and fill it with each element from `nums`. I chose to use a set here because it has `O(1)` lookup and because I only need to record when I've seen a number from `nums`, not how many times I've seen it. I then count from `1` to `nums.length` using a `for` loop. For each number `i`, I check whether that number exists in `numsSet`. If it doesn't, I add that number to my results array, as it also cannot be in `nums`. After I've iterated through the loop `nums.length` times, I return my results array.

### Analysis
Time Complexity: `O(n)`
* This solution steps through two loops all of `n` length (where `n` is the length of `nums`). That results in an real-world time of `O(2n)`, which simplifies to `O(n)`.

Space Complexity: `O(n)`
* This solution will create a set equal in size to the number of unique elements there are in `nums`, as well as a results array. In a worst-case scenario, the length of the set will be `n` (when there are no duplicates in `nums`) and the length of the results array will be `n - 1` (when `nums` is e.g. `[3,3,3]`, the results array will be `[1,2]`).

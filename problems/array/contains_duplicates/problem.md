# Contains Duplicates?
## Problem
Given an array of integers, find if the array contains any duplicates.

### Example 1:
```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Example 2:
```
Input: [1,2,3,4,5,6]
Output: false
```

## Solution
### JavaScript
```javascript
const containsDuplicates = function(nums) {
  let uniques = {};
  for(let i = 0; i < nums.length; i++) {
    if(uniques[nums[i]]) return true;
    uniques[nums[i]] = true;
  };

  return false;
};
```

## Explanation
### Reasoning
To easily check for duplicates in the input array I create a "seen" hash to keep track of every element from the array that I've seen. I do this by stepping through the array, adding an element to the hash (by setting a key of the element to the value `true`). At the same time, I check if the current element is already in the hash. If it is, that means there are at least two copies of the element in the array, which means the array contains at least one duplicate value, so I immediately return `true`. If I can step through the array without ever encountering a duplicate element, I return `false`.

### Analysis
Time Complexity: `O(n)`
* If there are no duplicate elements in the input array, this algorithm will step through every element of that array, which takes `n` time.

Space Complexity: `O(n)`
* If there are no duplicate elements in the input array, this algorithm will create a hash that has exactly `n` key-value pairs.

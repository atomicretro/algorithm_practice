# Majority Element In Array
## Problem
Given an array of size `n`, find the majority element. The majority element is the element that appears **more than** `⌊n/2⌋` times.

**Note:** You may assume the array is non-empty and a majority element always exist in the array.

### Example 1:
```
Input: [3,2,3]
Output: 3
```

### Example 2:
```
Input: [2,2,1,1,1,2,2]
Output: 2
```

## Solution
### JavaScript
```javascript
const majorityElement = function(nums) {
  let counter = {};
  for(let i = 0; i < nums.length; i++) {
    if(counter[nums[i]]) counter[nums[i]]++;
    else counter[nums[i]] = 1;

    if(counter[nums[i]] > nums.length / 2) return nums[i];
  };

  for(el in counter) {
    if(counter[el] > nums.length / 2) return parseInt(el);
  };

  return undefined;
};
```

## Explanation
### Reasoning
First I initialize a counter hash to keep count of every element in the input array. To do this I step through the input array and check whether anything exists at `counter[element]`. If `counter[element]` is `undefined`, I set the value of that element in the hash to `1`, otherwise I increment whatever value is there by `1`. If at any point while I'm stepping through the array I find that the count of an element is larger than half the length of the input array, I immediately return that element as it satisfies the return condition of the problem.

After I've stepped through the input array and counted every element, I then step through the keys of the counter hash, checking each key's counted value against half the length of the input array. As soon as I find an element that satisfies the return condition I return it to end the algorithm. If no majority element is found, I return `undefined`.

### Analysis
Time Complexity: `O(n)`
* This algorithm steps through and counts each element of the input array, which takes `n` time.

Space Complexity: `O(n)`
* In a worst-case scenario where there is no majority element because every element appears exactly once in the input array, this algorithm will create a counter hash with exactly `n` key-value pairs.

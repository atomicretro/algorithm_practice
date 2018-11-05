# Distribute Candies
## Problem
Given an integer array with even length, each number in the array represents a different kind of candy. Distribute these candies **equally** in number to a brother and a sister. Return the maximum number of different kinds of candies the sister could get.

**Note:**
* The length of the array is in range `[2, 10,000]`, and will be even.
* The numbers in the array are in range `[-100,000, 100,000]`.

### Example 1:
```
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three kinds of candies (1, 2, and 3), with two for each kind.
The sister has candies [1,2,3] and the brother has candies [1,2,3].
The sister has three different kinds of candies.
```

### Example 2:
```
Input: candies = [1,1,2,3]
Output: 2
Explanation:
There are three kinds of candies (1, 2, and 3), but an unequal amount of each.
The sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies.
```

## Solution
### JavaScript
```javascript
const distributeCandies = function(candies) {
  let kinds = new Set();
  candies.forEach((candy) => kinds.add(candy));
  return candies.length > kinds.size * 2 ? kinds.size : candies.length / 2;
};
```

## Explanation
### Reasoning
Because the input array `candies` will always be even, I know that the brother and the sister will always receive the same number of candies. Thus, this problem simply becomes determining how many different candies are in `candies`. To do this, I create a Set, `kinds`. I create a Set because by definition a Set can only contain unique values. I then step through `candies` attempting to add each element to `kinds`. If the element is not previously in `kinds`, it gets added. This will create a Set containing exactly one of each separate candy from `candies`. I then check if the length of `candies` is more than twice the size of `kinds`. If it is, it means that the sister will get some repeat candies, so I return `kinds.size` to be the number of distinct candies she receives. If `candies` is less than or equal to twice the size of `kinds` it means that the sister will receive no repeat candies, so I can simply return the length of `candies / 2` (because she will get half the candies from the input array).

### Analysis
Time Complexity: `O(n)`
* This algorithm must step through each element of the input array `candies` exactly once to check if it is a different type of candy or not, performing a constant time lookup on the Set `kinds` for each element.

Space Complexity: `O(n)`
* In a worst-case scenario where each element of `candies` is a different value, this algorithm will create a Set `kinds` that is exactly `n` elements long, where `n === candies.length`.

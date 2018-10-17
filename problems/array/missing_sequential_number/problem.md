# Missing Sequential Number
## Problem
Given an unordered array containing n distinct numbers taken from `0, 1, 2..., n`, find the number that is missing from the array.

**Bonus:** Your algorithm should run in linear runtime complexity. Can you implement it using constant space complexity?

### Example 1:
```
Input: [3,0,1]
Output: 2
```

### Example 2:
```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

## Solution
### JavaScript
```javascript
const missingNumber = function(nums) {
  let supposedSum = 0;
  for(let n = 0; n < nums.length; n++) supposedSum += (n + 1);
  let actualSum = nums.reduce((acc, val) => acc + val);
  return supposedSum - actualSum;
};
```

### Ruby
```ruby
def missing_number(nums)
  supposed_sum = 0
  nums.length.times { |n| supposed_sum += (n + 1) }
  actual_sum = nums.reduce(:+)
  supposed_sum - actual_sum
end
```

## Explanation
### Reasoning (JavaScript)
Two immediate naive solutions to this problem spring out to me:
1. To sort `nums` then step through the sorted array until I come to an element where `nums[i] + 1 !== nums[i+1]`. This would tell me that `nums[i] + 1` is missing from the array, as the value of each element should match its index number in an array of `0, 1, 2..., n` numbers.
2. Create a "seen" hash to mark each number in `nums`, stepping through the hash after the fact to see what is missing.

Both of these approaches have problems, however. The first sorts the input array, breaking the principle of functionality, and no sorting function runs in linear time which means I wouldn't achieve the bonus. The second approach reduces to linear time, and doesn't manipulate the input array, but it creates a hash with `n` key-value pairs, which again disqualifies me for the bonus.

Instead I use an algebraic approach. I know that `nums` is made up of all the numbers between `0` and `n` save one. That means that the sum of all the elements in `nums` is exactly one number off from the sum of a complete array of `0, 1, 2..., n` -- it would be off **by** the missing number. Thus I find what the sum **should** be by summing all the numbers between `0` and `nums.length`, then I reduce `nums`. The difference between the supposed sum and the actual sum of `nums` is the missing number.

### Analysis (JavaScript)
Time Complexity: `O(n)`
* Not only must I sum each number between `0` and `n`, I also must reduce the entirety of `nums`. This results in a runtime of `2n`, which simplifies to `O(n)`.

Space Complexity: `O(1)`
* I only ever keep track of two variables -- `supposedSum` and `actualSum` -- no matter how large `nums` is, resulting in constant space.

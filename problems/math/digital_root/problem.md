# Digital Root
## Problem
Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

### Example 1:
```
Input: 38
Output: 2
Explanation:
The process goes: 3 + 8 = 11, 1 + 1 = 2.
Since 2 has only one digit, return it.
```

## Solution
### Ruby
```ruby
def digital_root(num)
  return num if num < 10
  return add_digits(num / 10 + num % 10)
end
```

### JavaScript
```javascript
const digitalRoot = function(num) {
  if(num < 10) return num;
  return addDigits(Math.floor(num / 10) + num % 10);
};
```

## Explanation
### Reasoning
Because this problem is calling for the same operation to be done multiple times to an updating variable, my mind immediately went to recursion to solve it. My base case in the recursive function is when `num` has only one digit; once `num` has one digit I cannot reduce it any further by adding together its component digits and have thus found the digital root of the initial input. Getting to the base case is interesting. On each recursion call I peel off the digit in the ones place from `num` by both integer dividing and moduloing `num` by `10`. This isolates whatever digit is in the ones place due to the nature of the operations: integer dividing by `10` will always give you exactly how many `10`'s can fit into a number (in order words the exact value of the tens place), and moduloing by `10` does the opposite by telling you how much "doesn't fit" in any place higher than the ones (in other words the exact value of the ones place). I add these two quotients together and give the sum to another call of `digital_root`. This works even when `num` is a three or more digit number. Take `111`. Summing the three digits of `111` you get `1 + 1 + 1 == 3`. Peeling off the digit in the ones place takes a little longer, but gets you the same answer: `11 + 1 == 12, 1 + 2 == 3`.

### JavaScript Follow-Up
Because the `/` operator in JavaScript does implicit float division, I call `Math.floor()` around `num / 10` to simulate integer division in the language.

### Analysis
Time Complexity: `O(log(n))`
* This algorithm will run recursively until a single digit number is found, removing a digit on each recursive call. This will cause there to be log(n) digits, giving this problem a time complexity of `O(log(n))`.

Space Complexity: `O(1)`
* This algorithm stores no variables that increase in size with the input `num`.

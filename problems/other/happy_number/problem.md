# Happy Number
## Problem
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: starting with any positive integer, replace it with the sum of the squares of its digits. Repeat this process until the number equals `1` (where it will stay), or it loops endlessly in a cycle which does not include `1`. Those numbers for which this process ends in `1` are happy numbers.

### Example 1:
```
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## Solution
### Ruby
```ruby
def is_happy(n)
  seen = {}
  while !seen[n]
    seen[n] = true
    n = square_the_digits(n)
    return true if n == 1
  end
  false
end

def square_the_digits(n)
  return n**2 if n / 10 == 0
  (n % 10)**2 + square_the_digits(n / 10)
end
```

### JavaScript
```javascript
const isHappy = function(n) {
  let seen = {};
  while(!seen[n]) {
    seen[n] = true;
    n = squareTheDigits(n)
    if(n === 1) return true;
  };
  return false;
};

const squareTheDigits = function(n) {
  if(Math.floor(n / 10) === 0) return Math.pow(n, 2);
  return Math.pow(n % 10, 2) + squareTheDigits(Math.floor(n / 10));
};
```

## Explanation (Ruby)
### Reasoning
The two conditions I have to check for in this problem are whether a number `n` ever reduces down to `1`, or whether `n` gets stuck in an infinite cycle where its reductions repeat indefinitely. To check if `n` ever falls into an infinite loop, I create a hash map whose keys will be every reduction of `n` and whose values will always be `true`. I can use this hash to check whether or not I've seen a previous number `n` before, safeguarding against the possibility of falling into a loop.

After I create the hash I immediately step into a while loop whose condition checks for the **non-existence** of `n` in the hash map. I then add `n` to the hash to mark that it has been seen. Afterwards I replace `n` with its reduction: the sum of the squares of its component digits. I do this with a helper method that I will detail further down. After I redefine `n` I check if `n == 1`; if it does, I immediately return `true`.

My helper function, `square_the_digits`, uses recursion to sum the squares of all the component digits of its input `n`. It does this by first checking `n` against its base case: if `n` is less than `10`, `n / 10` will equal `0`, in which case no further meaningful recursion can take place and so the method immediately returns the square of `n`. If the base case is not true, the method instead returns the sum of `(n%10)^2` plus a recursive call to `square_the_digits(n/10)`. `(n%10)^2` will give the square of the digit in the ones place of `n`, while the recursive call will return the sum of the squares of all the other digits. The recursive call does this due to the way Ruby works: any number integer divided by `10` rounds down to a whole number, so integer dividing any number larger than `10` by `10` effectively removes the digit in the ones place from the number (e.g. `112 / 10 == 11`).

## Follow-up JavaScript Explanation
Due to the way `/` works in JavaScript, the above Ruby explanation does not port directly over. Instead, inside the helper function, I have to call `Math.floor()` whenever I divide `n` by `10`. This is because `/` in JavaScript implicitly returns a `float`, which will not work with the way I've written my main function. All other logic is the same between languages.

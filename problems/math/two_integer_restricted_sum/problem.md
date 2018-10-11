# Two Integer Restricted Sum
## Problem
Calculate the sum of two integers `a, b` WITHOUT using operators `+, -`.

### Example 1:
```
Input: a = 1, b = 2
Output: 3
```

### Example 2:
```
Input: a = -2, b = 3
Output: 1
```

## Solution
### Ruby
```ruby
def get_sum(a, b)
  largest = a.abs >= b.abs ? a.abs * 2 : b.abs * 2;
  number_line = (-largest..largest).to_a
  number_line.rotate!(a)
  number_line.rotate!(b)
  number_line[number_line.length / 2]
end
```

## Explanation
### Reasoning
My initial idea was to create arrays of length `a` and `b`, concatenate them together, then get that new super-array's length. That idea flew out the window once I remembered that negative numbers are a thing, as you can't have an array of negative length. But working with arrays got me thinking, what if I could manipulate arrays like a number line?

To do this I take the larger of the the input integers and create an array of every number `-larger * 2 <= larger * 2`. The bounds of the range are the larger input doubled as those are the largest possible sums (if `a == b`, and both inputs have the same sign, the answer would be `a` doubled). I call this range `number_line`, and because there are exactly `larger * 4 + 1` elements in length I know that `number_line.length / 2` is initially `0` (`(-n..n)` will always have exactly `n` elements on each side of a middle `0`). Using Ruby's built-in `rotate` method I then rotate the array by `a` and `b`, which, due to the make-up of `number_line`, is analogous to adding `a` and `b`, respectfully, _to the element at the middle index_. For example, say we have an array `[-1, 0, 1]`. Rotating that array by `1` gives us:
```
[-1, 0, 1].rotate(1) #=> [0, 1, -1]
```
The element at the middle index rotated from `0` to `1`, which is functionally equivalent to it being added by `1`. I then return the middle element after both rotations, outputting the correct sum.

### Additional Thoughts
I understand that the "standard" way of solving "operations without their operators" questions (e.g. sum without `+` / `-`) is to use bit manipulation of the input numbers, but that was not my initial idea on how to tackle this. I plan on writing a bit manipulation solution soon, and will update this markdown file when I do, but I wanted to showcase my thought process. I know that the absolute space that this algorithm takes up is abysmal (`4 * larger + 1`! That's a lot just to sum two numbers), and thus it cannot work with overly large inputs. It works flawlessly for smaller inputs, however, and more importantly shows that I understand the inner workings of Ruby enough to manipulate the language to do what I want even with restrictions. I think that's more important at the end of the day.

### Analysis
Time Complexity: `O(n)`
* This algorithm creates an array `largest * 4 + 1` elements in length, which takes `n` time to create. It also rotates through that array twice, but neither of those rotations are nested.

Space Complexity: `O(n)`
* This algorithm creates an array `largest * 4 + 1` elements in length, which would take `n` space.

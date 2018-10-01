# Binary Gap
## Problem
Given a positive integer `n`, find and return the longest distance between two consecutive `1's` in the binary representation of `n`.

If there aren't two consecutive `1's`, return `0`.

### Example 1:
```
Input: 22
Output: 2
Explanation:
22 in binary is 10110.
The first pair of 1's has a distance of 2.
The second pair of 1's has a distance of 1.
The answer is the larger distance, which is 2.
```

### Example 2:
```
Input: 8
Output: 0
Explanation:
8 in binary is 1000.
There isn't a pair of 1's in the binary representation of 8, so we return 0.
```

## Solution
### Ruby
```ruby
def binary_gap(n)
  binary = n.to_s(2)
  current_gap = 0
  longest_gap = 0
  binary.each_char.with_index do |ch, idx|
    next if idx == 0
    current_gap += 1
    if ch == '1'
      longest_gap = current_gap if current_gap > longest_gap
      current_gap = 0
    end
  end
  longest_gap
end
```

## Explanation
### Reasoning
A naive solution to this problem would be to store every gap in an array to compare against each other. This would work, but would be slow and memory intensive for binary numbers with lot's of `1's`. A better solution is to keep two variables on-hand, `current_gap` and `longest_gap`, so that you can compare gap distances as you step through the binary representation of `n`. This is exactly what I do here. Due to the nature of Ruby's `to_s(2)` binary conversion, I know that  the binary representation I'll step through will never have leading zeros; it will always start with `1`. This tells me two things: I can immediately start incrementing `current_gap` in anticipation of finding a gap-closing `1` later on; and that I can always ignore the first character, as the initial `1` isn't counted in a gap's distance. I then simply step through the binary representation, incrementing `current_gap` once for each character. If and when I come across another `1`, I check whether `current_gap` is larger than `longest_gap`; if it is I set `longest_gap = current_gap`. Regardless, I also reset `current_gap = 1` to start the process over. This continues until I've stepped through the entire binary representation. If a closing `1` is never encountered, the `current_gap > longest_gap` check is never called so `longest_gap` remains `0`, fulfilling our failure state.

### Analysis
Time Complexity: `O(n)`
* Because I'm only stepping through the binary representation of `n` once, comparing gaps along-the-way, the time complexity of this algorithm will grow in direct relation to the length of the binary representation of input `n`.

Space Complexity: `O(n)`
* Because this algorithm is not assuming a base 2 input, it must convert and store a base 2 representation of the input number to step through. Thus its space complexity will grow in direct relation with the base 2 representation of input `n`.

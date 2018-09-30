# Number Complement
## Problem
Given a positive integer, output its complement number. The complement to a number is the number made by flipping all of its binary bits.

**Note:** The given integer is guaranteed to fit within the range of a 32-bit signed integer. You can assume no leading zero bit in the integer’s binary representation.

### Example 1:
```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```
### Example 2:
```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

## Solution
### Ruby
```ruby
def find_complement(num)
  flipped = ''
  num.to_s(2).each_char { |ch| ch == '0' ? flipped += '1' : flipped += '0'}
  flipped.to_i(2)
end
```

## Explanation
### Reasoning
This is a straightforward problem made easier by some nice built-in methods in Ruby. First, I have to convert the input `num` into its binary string representation. Luckily, Ruby takes care of the conversion for us by calling `to_s` on it with a base parameter of `2`. After the conversion, I step through the binary string, adding the opposite value to a previously declared empty results string (here called `flipped`). Once the results string is fully populated with opposite values, I convert it back into a base 10 Integer. Thankfully, Ruby makes this easy for us as well with its `to_i` method. And voila! That's that.

### Analysis
Time Complexity: `O(n)`
* We have to look at each 'bit' in the binary representation of the input `num` to determine the output, making this `O(n)`.

Space Complexity: `O(n)`
* The results binary string will be exactly as long as the binary string of the input number, making this `O(n)`.

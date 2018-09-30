# To Lower Case
## Problem
Implement function `toLowerCase()` that takes in a string parameter `str` and returns the same string in lowercase. Do not modify the original string.

### Example 1:
```
Input: "Hello"
Output: "hello"
```

### Example 2:
```
Input: "here"
Output: "here"
```

## Solution
### Ruby
```ruby
def to_lowercase(str)
  converter = create_converter

  converted_str = ''
  str.each_char { |ch| converted_str += converter[ch] ? converter[ch] : ch }
  converted_str
end

def create_converter
  converter = {}
  lower = ('a'..'z').to_a
  upper = ('A'..'Z').to_a
  upper.each_with_index { |ch, i| converter[ch] = lower[i] }
  converter
end
```

## Explanation
### Reasoning
Most modern programming languages have a built-in method to easily output strings in lowercase letters. I didn't want to take advantage of these methods, as I felt that would've gone against the spirit of the problem.

Instead, I built a dictionary where each uppercase English alphabet character was mapped to its lowercase equivalent. I create this dictionary programmatically by creating two ranges, one of all lowercase characters and one of all uppercase, after which I map the lowercase values to their uppercase keys. After making my dictionary the conversion to a fully lowercase string is a simple matter of stepping through the input string and, when finding an uppercase character, keying into the dictionary to get its lowercase counterpart.

### Extension
The method as it is currently written only works for the 26 English language alphabet characters. An easy extension would be to increase the range to cover non-English language characters, but this functionality lies outside my needs for the method. Alternatively, the method can be modified to intake an outside dictionary, which would allow it to be used with any character set and would decrease the amount of time it takes to run when called at the cost of coupling it to a outside data.

### Analysis
Time Complexity: `O(n)`
* Programmatically creating the dictionary every time the method is called slows the process down in absolute time, but as the dictionary is bound by the English alphabet and not the input string this has no effect on the time complexity of the algorithm. Instead, my solution is `O(n)` because it needs to step through each character in the input string to check whether it is lowercase or whether it needs to be run through the dictionary.

Space Complexity: `O(n)`
* As the problem prohibits modifying the input string, I need to build a new, converted string to return. The converted string will be equally as long as the input string.

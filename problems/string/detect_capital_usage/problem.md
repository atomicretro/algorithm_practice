# Detect Capital Usage
## Problem
Given a word, judge whether the usage of capitals in it is correct or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

* All letters in this word are capitals, like "USA".
* All letters in this word are not capitals, like "leetcode".
* Only the first letter in this word is capital if it has more than one letter, like "Google".
* Otherwise, we define that this word doesn't use capitals in a right way.

### Example 1:
```
Input: "USA"
Output: True
```

### Example 2:
```
Input: "FlaG"
Output: False
```

## Solution
### Ruby
```ruby
def detect_capital_use(word)
  num_uppercase = 0
  word.each_char { |ch| num_uppercase += 1 if is_upper?(ch) }
  if is_upper?(word[0])
    num_uppercase == 1 || num_uppercase == word.length
  else
    num_uppercase == 0
  end
end

def is_upper?(letter)
  letter == letter.upcase
end
```

## Explanation
### Reasoning
This algorithm is fairly straightforward. I step through the input `word` counting the number of uppercase letters. I then check whether the first letter is uppercase. If it is, I check if there are either exactly one capital letter, or if the number of capital letters matches the length of the input `word`. If the first letter isn't uppercase, I make sure the count of uppercase letters is zero.

### Analysis
Time Complexity: `O(n)`
* This algorithm steps through each character of the input `word`, which takes `n` time.

Space Complexity: `O(1)`
* This algorithm only keeps track of a single variable which increments based on the number of uppercase letters in the input `word`.

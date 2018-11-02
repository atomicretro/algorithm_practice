# Reverse Words
## Problem
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Note:** In the string, each word is separated by single space and there will not be any extra space in the string.

### Example 1:
```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

## Solution
### Ruby
```ruby
def reverse_words(sen)
  sen.split(' ').each{ |word| word.reverse! }.join(' ')
end
```

## Explanation
### Reasoning
Having a deep understanding of Ruby makes this problem trivial. Using the built-in methods `split` and `join`, as well as Ruby's `each` enumerator, I take the input `sen`, split it on the whitespace characters, reverse each individual string in the resulting array, then join the array back together inserting a new whitespace character between the reversed words.

### Analysis
Time Complexity: `O(n)`
* My solution must step through each character of the input `sen` to reverse it, resulting in a time complexity of `O(n)`.

Space Complexity: `O(m)`
* I create an array to hold each words from the input `sen` (delineated by whitespace characters) before reversing them. The array will be of size `m`, where `m` is the number of words in `sen`.

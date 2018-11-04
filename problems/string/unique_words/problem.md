# Unique Words Amongst Sentences
## Problem
We are given two sentences `a` and `b`. (A sentence is a string of space separated words. Each word consists only of lowercase letters.)

A word is unique if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all unique words. You may return the list in any order.

**Note:**
* `0 <= a.length <= 200`
* `0 <= b.length <= 200`
* `a` and `b` both contain only spaces and lowercase letters.

### Example 1:
```
Input: a = "this apple is sweet", b = "this apple is sour"
Output: ["sweet","sour"]
```

### Example 2:
```
Input: a = "apple apple", b = "banana"
Output: ["banana"]
```

## Solution
### Ruby
```ruby
def unique_words(a, b)
  words = Hash.new(0)
  a.split(' ').each { |word| words[word] += 1 }
  b.split(' ').each { |word| words[word] += 1 }
  words.select { |k , v| v == 1 }.keys
end
```

## Explanation
### Reasoning
Because a unique word exists only once in both sentences, I know that I can simply count all the words from both sentences and return every word that has a count of `1`. To do this, I create a counter hash (here called `words`). I then split each input sentence on the whitespace characters before stepping through the resulting array of words. I add each word from both sentences to the counter hash, with the word itself being the key and the number of times I've seen the word as its value. After I step through both sentences and count each of their words, I select out the key-value pairs with a value of `1` (signifying the words I've seen only once). Because the problem is expecting an array of the unique words, I then call `.keys` on the hash that is created from my call to `select`.

### Analysis
Time Complexity: `O(n)`
* This solution has a time complexity of `O(n)` where `n` is the number of words in both sentences, as it must step through each word to count it.

Space Complexity: `O(m)`
* This solution has a space complexity of `O(n)` where `n` is the number of words in both sentences, as it will create a counter hash that has exactly `n` key-value pairs.

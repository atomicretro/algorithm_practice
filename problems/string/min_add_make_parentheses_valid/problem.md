# Minimum Add To Make Parenthesis String Valid
## Problem
Given a string `S` of only parentheses (`(` and `)`), add the minimum number of parentheses in any position so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:
* It is an empty string; or
* It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings; or
* It can be written as `(A)`, where `A` is a valid string.

Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

**Note:**
* `S.length <= 1000`
* `S` only consists of `(` and `)`.

### Example 1:
```
Input: "())"
Output: 1
```

### Example 2:
```
Input: "((("
Output: 3
```

### Example 3:
```
Input: "()"
Output: 0
```

### Example 4:
```
Input: "()))(("
Output: 4
```

## Solution
### JavaScript
```javascript
const minAddToMakeValid = function(S) {
  let open = [];
  let completed = 0;
  for(let i = 0; i < S.length; i++) {
    if(S[i] === '(') {
      open.push(true);
    } else if(S[i] === ')' && open[0] === true) {
      open.pop();
      completed += 2;
    };
  };
  return S.length - completed;
};
```

## Explanation
### Reasoning
This question is basically asking, "how many open parentheses don't have a matching closing parenthesis, and vice versa?". Reworded like that, my path forward becomes clear: I can count the number of open-and-closed parenthesis pairs in `S`, subtracting that number from the length of `S` to get the amount of unclosed parentheses in the input. To do this I create an array called `open` that will keep track of every opening parenthesis (`(`) I come across. `open` will act as a make-shift Stack, adding a `true` for every opening parenthesis and popping a `true` whenever I encounter a matching closing one. Every time I pop a `true` I also increment a counter variable (here called `completed`) that's keeping track of the number of completed, valid parentheses I find by `2` (I increment `completed` by `2` because there are two parenthesis characters in every completed pair). After I've stepped through every character of `S` I subtract `completed` from the length of `S` to get the number of single, non-matching parentheses, which I return.

### Analysis
Time Complexity: `O(n)`
* My solution must step through each character of `S` to check if it's a `(` or a `)`, resulting in a time complexity of `O(n)`.

Space Complexity: `O(n)`
* In the worst-case scenario (where `S` is filled with nothing but opening parentheses) my solution will create a new array (`open`) that will be the same length as `S`.

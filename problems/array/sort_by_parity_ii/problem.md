# Sort Array By Parity II
## Problem
Given an array `arr` of non-negative integers, half of the integers in `arr` are odd, and half of the integers are even.

Sort the array so that whenever `arr[i]` is odd, `i` is odd; and whenever `arr[i]` is even, `i` is even (in other words -- all odd number indices have odd number integer values, and all even number indices have even number integer values).

You may return any answer array that satisfies this condition.

**Note:**
* `2 <== arr.length <== 20000`
* `arr.length % 2 === 0`
* `0 <== arr[i] <== 1000`

### Example 1:
```
Input: [4,2,5,7]
Output: [4,5,2,7]
[4,7,2,5], [2,5,4,7], [2,7,4,5] would also be acceptable.
```

## Solution
### JavaScript
```javascript
const sortArrayByParityII = function(arr) {
  let sorted = [];
  let evenIdx = 0;
  let oddIdx = 1;
  arr.forEach((n) => {
    if(n % 2 === 0) {
      sorted[evenIdx] = n;
      evenIdx += 2;
    } else {
      sorted[oddIdx] = n;
      oddIdx += 2;
    };
  });
  return sorted;
};
```

## Explanation
### Reasoning
Using a quirk of the JavaScript language, this problem is easily solved. Because almost everything in JavaScript is an Object -- including arrays -- I am able to key into arrays at indices that don't yet exist. What I mean by this is that, if I have an array `A` with a length of `0`, I can key into `A` at index `1` and directly manipulate the value there _even though `A` doesn't yet have an index `1` or a value assigned to that index_. I use this to my advantage by immediately creating a results array `sorted` at the top of my function, followed by two index counters: `evenIdx` to insert even values and `oddIdx` to insert odd values. I will key into `sorted` using these counters, assigning even indices even integers and odd indices odd values as I find them.

I then step through the input array `arr`, checking if each value is even or odd. When, say, an even value is found, I assign that value to `arr[evenIdx]` then increment `evenIdx` by two so it is ready for the next even value I come across. I do the same for all odd values I encounter. After I step through the entirey of `arr` I return `sorted`, ending the function.

### Analysis
Time Complexity: `O(n)`
* I have to step through each element of the input array exactly once to determine if its value is even or odd, giving this solution a time complexity of `O(n)`.

Space Complexity: `O(n)`
* The results array will be exactly as long as the input array, giving this solution a space complexity of `O(n)`.

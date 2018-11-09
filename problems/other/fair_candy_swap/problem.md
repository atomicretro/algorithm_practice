# Fair Candy Swap
## Problem
Alice and Bob have candy bars of different sizes: `A[i]` is the size of the `i`-th bar of candy Alice has, and `B[j]` is the size of the `j`-th bar of candy Bob has.

Since they are friends, they would like to exchange one candy bar each so that they both have the same total amount of candy. (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array `ans` where `ans[0]` is the size of the candy bar that Alice must exchange, and `ans[1]` is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them. It is guaranteed an answer exists.

**Note:**
* `1 <= A.length <= 10000`
* `1 <= B.length <= 10000`
* `1 <= A[i] <= 100000`
* `1 <= B[i] <= 100000`
* It is guaranteed that Alice and Bob will have different total amounts of candy.
* It is guaranteed an answer exists.

### Example 1:
```
Input: A = [1,1], B = [2,2]
Output: [1,2]
```

### Example 2:
```
Input: A = [1,2], B = [2,3]
Output: [1,2]
```

### Example 3:
```
Input: A = [2], B = [1,3]
Output: [2,3]
```

### Example 4:
```
Input: A = [1,2,5], B = [2,4]
Output: [5,4]
```

## Solution
### JavaScript
```javascript
const fairCandySwap = function(A, B) {
  let ans;
  let aTotal = A.reduce(getSum);
  let bTotal = B.reduce(getSum);
  let mid = (aTotal + bTotal) / 2;
  let aDiffTotals = new Set();
  A.forEach((aCandy) => aDiffTotals.add(Math.abs(aTotal - aCandy)))
  B.forEach((bCandy) => {
    if(aDiffTotals.has(mid - bCandy)) ans = [aTotal - (mid - bCandy), bCandy];
  });
  return ans;
};

const getSum = (a, b) => a + b;
```

## Explanation
### Reasoning
Because of the fact that Alice and Bob will always have different total amounts of candy, I know that one total amount of candy will always be grater than the other. Giving both Alice and Bob fair amounts of candy, then, simply becomes making sure their individual amounts both equal the average of their initial amounts. I do this by first calculating the total amounts of candy that both Alice and Bob have, then finding the average between these two numbers (here represented by `mid`, for 'midpoint'). I then create an empty Set, `aDiffTotals`, which will hold in each index the total amount of candy that Alice (`A`) has **minus** the element at that index. In other words, if `A = [1,2,3]` the total will be `6` and `aDiffTotals` will equal `{5,4,3}` (`A[1] = 2` and `A[2] = 3`, so `aDiffTotals[0] = A[1] + A[2] = 5`). I do this because Alice and Bob need to swap one candy each to reach `mid`. I need the totals of all of Alice's candies **minus one** to compare against Bob's candies to see which one of Bob's candies fits. Because I don't know beforehand which one of Alice's candies I will be swapping with Bob, I get the total amount of candy Alice has omitting each individual candy in her possession once.

Once I have the full Set of `aDiffTotals`, I then step through Bob's (`B`) candies. I check if the difference of each of Bob's candies subtracted from `mid` exists in `aDiffTotals`. If that difference exists I know that the current candy I'm checking from Bob needs to be given to Alice, because with the current candy from Bob Alice can reach `mid`. To get the candy amount that Alice needs to give to Bob, I simply subtract the current difference from `aDiffTotals` from Alice's actual total.

### Analysis
Time Complexity: `O(n)`
* This algorithm must step through the input arrays `A` and `B` both each exactly once. However, it never nests these array iterations, guaranteeing that the time complexity remains linear. Thus, this algorithm has a time complexity of `O(n)`, where `n` equals the size of the larger input array.

Space Complexity: `O(n)`
* I create a Set (`aDiffTotals`) of equal size to the first input array. Thus this algorithm has a space complexity of `O(n)`, where `n` equals the size of the first input array. A micro-optimization that I could do on a refactoring would be to check which input array is shorter as to ensure that I only create a Set from the shorter array.

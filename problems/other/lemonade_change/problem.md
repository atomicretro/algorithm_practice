# Lemonade Change
## Problem
At your lemonade stand, each lemonade costs $5.

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by `bills`).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is the customer pays $5.

Note that you don't have any change in `hand` at first.

Return `true` if and only if you can provide every customer with correct change.

### Example 1:
```
Input: [5,5,5,10,20]
Output: true
Explanation:
From the first 3 customers, we collect three $5.
From the fourth customer, we collect $10 and give back $5.
From the fifth customer, we give $10 and $5.
Since all customers got correct change, we output true.
```

### Example 2:
```
Input: [5,5,10,10,20]
Output: false
Explanation:
From the first two customers, we collect two $5.
For the next two customers, we collect $10 and give back $5.
For the last customer, we can't give change of $15 back because we only have two $10.
Since not every customer received correct change, the answer is false.
```

## Solution
### JavaScript
```javascript
const lemonadeChange = function(bills) {
  let hand = { 5: 0, 10: 0 };
  for(let i = 0; i < bills.length; i++) {
    switch(bills[i]) {
      case 5:
        hand[5]++;
        break;
      case 10:
        if(hand[5] > 0) hand[5]--;
        else return false;
        hand[10]++;
        break;
      case 20:
        if(hand[5] > 0 && hand[10] > 0) {
          hand[5]--;
          hand[10]--;
        } else if(hand[5] >= 3) {
          hand[5] -= 3;
        } else {
          return false;
        };
        break;
    };
  };
  return true;
};
```

## Explanation
### Reasoning
For this problem I need to keep track of the different bills that I get from the input array. However, it's not necessary to keep track of `20` I get, as I can only ever give `5` and `10` back. Thus I initialize a hash, `hand` (for "cash-on-hand"), with `5` and `10` both pointing to `0`, as I have no change to start with. I then step through the input array. On receiving a `5` I simply add it to `hand` as I don't need to give anything back to the customer. On receiving a `10` I check whether I have at least one `5` in `hand`; if I do I decrement the corresponding value of `5` by one, and if I don't I immediately return `false`. On receiving a `20` I check whether I have at least one `10` and at least one `5`, or at least three `5`; if either of those conditions are `true` I decrement the corresponding `hand` values and if neither condition is `true` I immediately return `false`. I check if `hand` has at least one `5` and one `10` before checking if `hand` has three `5` because `5` is more versatile than `10`; I want to keep `5` in `hand` for longer as it can be used in more situations. Finally, if I am able to step through the entire input array I know that  had enough change for everyone so I return `true`.

### Analysis
Time Complexity: `O(n)`
* When an input array is set up so that I would have enough change for every customer, I would have to step through the entire array, which takes `n` time.

Space Complexity: `O(1)`
* No matter how large the input array is, I only ever keep track of the number of `5` and `10` that I have at any one time, resulting in a constant space complexity.

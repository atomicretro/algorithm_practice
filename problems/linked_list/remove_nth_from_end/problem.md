### Remove Nth Node From End of List
## Problem
Given a linked list, remove the nth node from the end of list and return its head. Bonus points for solving this problem in one pass!

### Example:
```
Given linked list: 1 => 2 => 3 => 4 => 5, and n = 2.

Output:  1 => 2 => 3 => 5
```

Note: given `n` will always be valid.

## Solution
### JavaScript
```javascript
const removeNthFromEnd = function(head, n) {
  let slowNode = head;
  let fastNode = head;
  for(let i = 0; i < n; i++) fastNode = fastNode.next

  if(fastNode === null) {
    head = slowNode.next;
    return head;
  } else if(fastNode.next === null) {
    slowNode.next = slowNode.next.next;
    return head;
  };

  while(fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
    if(fastNode.next === null) {
      slowNode.next = slowNode.next.next;
      return head;
    };
  };

  return head;
};
```

## Explanation
### Reasoning
My high-level reasoning on how to solve this problem in one pass was to keep track of two nodes which had `n + 1` nodes in-between them. Therefore, once the further along node reached the end of the linked list, I would know the first node is `n + 1` paces behind, and could simply remove the nth node from the end be redefining the first node's next property.

* Given linked list `1 => 2 => 3 => 4 => 5` and `n = 2`, set `slowNode = 1` and `fastNode = 1`.
* Offset `fastNode` by `n` nodes: `fastNode = 3`.
* Increment both `slowNode` and `fastNode` by one to keep them in step: `slowNode = 2` and `fastNode = 4`.
* `fastNode` has not reached the end of the list, so increment again: `slowNode = 3` and `fastNode = 5`.
* `fastNode` is now at the end of the linked list, which means `slowNode.next` is `n` nodes from the end.
* Delete `slowNode.next` by redefining it: `slowNode.next = slowNode.next.next`.
* Voila! The nth node from the end has just been removed from the list: `1 => 2 => 3 => 5`.

### Analysis
Time Complexity: `O(n)`
* `fastNode` always has to step through the entire linked list to reach the end to properly evaluate `slowNode`. The time complexity of this function is `O(n)`.

Space Complexity: `O(1)`
* The function only keeps track of `slowNode`, `fastNode`, and an index for a single `for` loop, keeping space complexity constant.

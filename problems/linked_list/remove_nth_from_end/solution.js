var removeNthFromEnd = function(head, n) {
  let heldNode = head;
  let currentNode = head;
  for(let i = 0; i < n; i++) currentNode = currentNode.next

  if(currentNode === null) {
    head = heldNode.next;
    return head;
  } else if(currentNode.next === null) {
    heldNode.next = heldNode.next.next;
    return head;
  };

  while(currentNode.next) {
    heldNode = heldNode.next;
    currentNode = currentNode.next;
    if(currentNode.next === null) {
      heldNode.next = heldNode.next.next;
      return head;
    };
  };

  return head;
};

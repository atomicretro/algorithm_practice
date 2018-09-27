var removeNthFromEnd = function(head, n) {
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

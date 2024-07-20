// Here fast pointer will run two time then slow pointer so when there is no further node then slow will it at middle

function middleNode(head: any): any {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    console.log(slow);
    console.log(fast);
  }
  return slow;
}

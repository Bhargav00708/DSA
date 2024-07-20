class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let reverseList = new ListNode(head.val);
  while (head.next != null) {
    head = head.next;
    let newNode = new ListNode(head.val, reverseList);
    reverseList = newNode;
  }
  return reverseList;
};

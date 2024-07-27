// see strivers video for batter understanding
// here what happen that if fast and slow will meet according to floydes(hare and tortoise) algorithms so
// here if we move any pointer fast or slow to head after meating and move both one point ahead so eventually
// we find starting point here head to loop start distance is L1 of slow so fast distance is L1 + L1 and distance between
// slow and fast is D so length of the loop is L1(distance between slow and fast is L1) + D so that's why we are getting that.

var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
// Here we take 10000 because max length of a ll will be 10000 and we also here use slow and fast if they both meet then there
// will be loop because if there is loop they will definitely meet

var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false;
  }
  for (let i = 0; i <= 10000; i++) {
    if (head != null) {
      head = head.next;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

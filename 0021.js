/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  const result = newList;

  if (l1 && !l2) return l1;
  if (l2 && !l1) return l2;
  if (!l1 && !l2) return null;

  while (l1 || l2) {
      if (!l1) {
          newList.val = l2.val;
          newList.next = l2.next;
          break;
      } else if (!l2) {
          newList.val = l1.val;
          newList.next = l1.next;
          break;
      } else if (l1.val <= l2.val) {
          newList.val = l1.val;
          l1 = l1.next;
      } else {
          newList.val = l2.val;
          l2 = l2.next;
      }
      newList.next = new ListNode(0);
      newList = newList.next;
  }

  return result;
};

/**
 * 最快题解
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if(!l2) return l1;
  let head, temp1, temp2;
  if (l1.val > l2.val) {
    head = l2;
    temp1 = l1;
    temp2 = l2.next;
  } else {
    head = l1;
    temp1 = l1.next;
    temp2 = l2;
  }
  let cur = head;
  while(temp1 && temp2) {
    if (temp1.val > temp2.val) {
      cur.next = temp2;
      temp2 = temp2.next;
    } else {
      cur.next = temp1;
      temp1 = temp1.next;
    }
    cur = cur.next;
  }
  cur.next = temp1 === null ? temp2 : temp1;
  return head;
};
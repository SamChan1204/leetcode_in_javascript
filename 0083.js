/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;

  let currentValid = head;
  let next = head.next;

  while (next !== null) {
    if (next.val !== currentValid.val) {
      currentValid.next = next;
      currentValid = next;
    }
    next = next.next;
  }

  currentValid.next = null;

  return head;
};

/**
 * 最快题解
 */
var deleteDuplicates = function(head) {
  if(!head || !head.next) {
      return head
  }
  let prev = head
  let curr = head.next
  while(curr) {
      if(curr.val === prev.val) {
          // 如果curr为最后一个，则直接删除curr
          if(!curr.next) {
              prev.next = null
              return head
          }
          // 使用curr.next覆盖curr，相当于删除了curr
          curr.val = curr.next.val
          curr.next = curr.next.next
      } else {
          curr = curr.next
          prev = prev.next
      }
  }
  return head
};
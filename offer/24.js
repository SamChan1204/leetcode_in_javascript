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
var reverseList = function (head) {
  let res = null

  let cur = head
  while (cur) {
    const node = {
      val: cur.val,
      next: null,
    }

    if (res) node.next = res

    res = node
    cur = cur.next
  }

  return res
}

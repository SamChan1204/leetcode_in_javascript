/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null

  let res = {
    val: head.val,
    next: null,
  }
  let cur = head.next

  while (cur) {
    const node = {
      val: cur.val,
      next: res,
    }

    res = node

    cur = cur.next
  }

  return res
}

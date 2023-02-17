/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = []

  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }

  const res = []

  while (stack.length) {
    res.push(stack.pop())
  }

  return res
}

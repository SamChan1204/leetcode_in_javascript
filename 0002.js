/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const sum = l1.val + l2.val

  let carry = sum >= 10 ? 1 : 0

  let head = {
    val: sum % 10,
    next: null,
  }
  let tail = head

  let node1 = l1.next
  let node2 = l2.next

  while (node1 || node2) {
    const sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + carry
    if (sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    const newNode = {
      val: sum % 10,
      next: null,
    }

    tail.next = newNode
    tail = newNode

    if (node1) node1 = node1.next
    if (node2) node2 = node2.next
  }

  if (carry) {
    tail.next = {
      val: 1,
      next: null,
    }
  }

  return head
}

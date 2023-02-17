/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = []

  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }

  let headP = 0
  let tailP = arr.length - 1

  while (headP < tailP) {
    if (arr[headP] !== arr[tailP]) return false

    headP++
    tailP--
  }

  return true
}

/**
 * 最快题解
 */
var isPalindrome = function (head) {
  // 翻转链表
  let fp = head
  let sp = head
  let reverse = null
  while (fp && fp.next && sp) {
    fp = fp.next.next
    const tmp = sp.next
    sp.next = reverse
    reverse = sp
    sp = tmp
  }
  if (fp) {
    // 节点个数为奇数，sp 需再走一步
    sp = sp.next
  }
  while (sp && reverse) {
    if (sp.val !== reverse.val) return false
    sp = sp.next
    reverse = reverse.next
  }
  return true
}

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map()
  const itemMap = new Map()

  let res
  let newCur
  let cur = head
  while (cur) {
    const node = {
      val: cur.val,
      next: null,
      random: null,
    }

    itemMap.set(cur, node)

    if (!res) {
      res = node
      newCur = node
    } else {
      newCur.next = node
      newCur = newCur.next
    }

    if (cur.random) {
      if (map.has(cur.random)) {
        const item = map.get(cur.random)
        item.from.push(node)

        if (item.to) {
          node.random = item.to
        }
      } else {
        node.random = itemMap.get(cur.random) || null
        map.set(cur.random, {
          from: [node],
          to: node.random,
        })
      }
    }

    if (map.has(cur)) {
      const item = map.get(cur)
      item.to = node
      item.from.forEach((n) => (n.random = node))
    }

    cur = cur.next
  }

  return res
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return []

  const arr = [root]

  const result = []

  while (arr.length) {
    const cur = arr.shift()
    result.push(cur.val)

    if (cur.left) arr.push(cur.left)
    if (cur.right) arr.push(cur.right)
  }

  return result
}

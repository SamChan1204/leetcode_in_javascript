/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []

  const result = []

  let curRow = [root]

  let isRight = true

  while (curRow.length) {
    const nextRow = []
    const values = []

    while (curRow.length) {
      const item = curRow.shift()
      isRight ? values.push(item.val) : values.unshift(item.val)

      item.left && nextRow.push(item.left)
      item.right && nextRow.push(item.right)
    }

    result.push(values)
    curRow = nextRow
    isRight = !isRight
  }

  return result
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  return getMinDepth(root)
}

function getMinDepth(root) {
  if (!root) return Infinity
  if (!root.left && !root.right) return 1
  return Math.min(getMinDepth(root.left), getMinDepth(root.right)) + 1
}

/**
 * 最快题解
 */
var minDepth = function (root) {
  if (root == null) {
    return 0
  }
  let queue = [root]
  let depth = 0
  while (queue.length > 0) {
    let n = queue.length
    depth++
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (node.left == null && node.right == null) {
        return depth
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
}

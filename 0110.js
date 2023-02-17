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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return getDepthAndIsBalenced(root).balenced
}

function getDepthAndIsBalenced(root) {
  if (!root)
    return {
      depth: 0,
      balenced: true,
    }
  const dataLeft = getDepthAndIsBalenced(root.left)
  const dataRight = getDepthAndIsBalenced(root.right)

  return {
    depth: Math.max(dataLeft.depth, dataRight.depth) + 1,
    balenced:
      dataLeft.balenced &&
      dataRight.balenced &&
      Math.abs(dataLeft.depth - dataRight.depth) <= 1,
  }
}

/**
 * 最快题解
 */
var isBalanced = function (root) {
  let res = true
  const height = (root) => {
    if (!root) return 0
    else {
      const l = height(root.left)
      const r = height(root.right)
      if (Math.abs(l - r) > 1) res = false
      return Math.max(l, r) + 1
    }
  }
  height(root)
  return res
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isSymmetricNode(root, root)
}

function isSymmetricNode(A, B) {
  if (!A && !B) return true
  if (!A || !B) return false

  return (
    A.val === B.val &&
    isSymmetricNode(A.left, B.right) &&
    isSymmetricNode(A.right, B.left)
  )
}

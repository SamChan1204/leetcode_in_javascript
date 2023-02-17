/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null

  const node = {
    val: root.val,
    left: mirrorTree(root.right),
    right: mirrorTree(root.left),
  }

  return node
}

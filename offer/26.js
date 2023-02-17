/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false
  return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function isSame(A, B) {
  if (!A || !B) return false

  const isEqual = A.val === B.val
  let isLeftSame = true
  let isRightSame = true

  if (isEqual) {
    if (A.left && B.left) {
      isLeftSame = isSame(A.left, B.left)
    } else if (!A.left && B.left) {
      isLeftSame = false
    }
    if (A.right && B.right) {
      isRightSame = isSame(A.right, B.right)
    } else if (!A.right && B.right) {
      isRightSame = false
    }
  }

  return isEqual && isLeftSame && isRightSame
}

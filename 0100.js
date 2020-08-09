/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  function getNewNode(p, q) {
    return {
      ori: p,
      other: q,
    };
  }
  
  let currentLevel = [getNewNode(p, q)];

  while (currentLevel.length) {
    const nextLevel = [];

    for (let i = 0, l = currentLevel.length; i < l; i++) {
      const {ori, other} = currentLevel[i];
      const oriLeft = ori.left;
      const oriRight = ori.right;
      const otherLeft = other.left;
      const otherRight = other.right;

      const sameLeft = (oriLeft && otherLeft && oriLeft.val === otherLeft.val) || (!oriLeft && !otherLeft);
      const sameRight = (oriRight && otherRight && oriRight.val === otherRight.val) || (!oriRight && !otherRight);

      if (sameLeft && sameRight) {
        if (oriLeft) {
          nextLevel.push(getNewNode(oriLeft, otherLeft));
        }

        if (oriRight) {
          nextLevel.push(getNewNode(oriRight, otherRight));
        }
      } else {
        return false;
      }
    }

    currentLevel = nextLevel;
  }

  return true;
};

/**
 * 直接递归（最快题解）
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
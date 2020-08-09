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
var levelOrderBottom = function(root) {
  if (!root) return [];

  const result = [];
  let currentLevel = [root];
  let currentLevelVals = [root.val];

  while(currentLevel.length) {
    result.unshift(currentLevelVals);

    const nextLevel = [];
    const nextLevelVals = [];
    currentLevel.forEach(node => {
      const { left, right } = node;
      if (left) {
        nextLevel.push(left);
        nextLevelVals.push(left.val);
      }
      if (right) {
        nextLevel.push(right);
        nextLevelVals.push(right.val);
      }
    });

    currentLevel = nextLevel;
    currentLevelVals = nextLevelVals;
  }

  return result;
  
};
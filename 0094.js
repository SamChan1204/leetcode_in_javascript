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
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root) {
  return travel(root)
}

function travel(root) {
  if (!root) return []
  return [...travel(root.left), root.val, ...travel(root.right)]
}

// 迭代
var inorderTraversal = function (root) {
  if (!root) return []

  const types = {
    left: 1,
    middle: 2,
    right: 3,
  }

  const result = []

  let next = root
  next.type = types.middle
  next.parent = null
  next.traveled = false

  while (next) {
    const cur = next
    if (cur.traveled) {
      if (cur.type === types.left || cur.type === types.right) {
        next = cur.parent
      } else {
        next = null
      }
    } else {
      if (cur.left && !cur.left.traveled) {
        next = cur.left
        next.parent = cur
        next.type = types.left
      } else {
        result.push(cur.val)
        cur.traveled = true
        if (cur.right) {
          next = cur.right
          next.parent = cur
          next.type = types.right
        } else {
          next = cur
        }
      }
    }
  }

  return result
}

/**
 * 最快题解
 */
var inorderTraversal = function (root) {
  const list = []
  const stack = [root]
  while (stack.length !== 0) {
    const cur = stack.pop()
    if (typeof cur === 'object') {
      stack.push(cur?.right, cur?.val, cur?.left)
    } else if (typeof cur === 'number') {
      list.push(cur)
    }
  }
  return list
}

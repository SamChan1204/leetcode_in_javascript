/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false

  const length = matrix[0].length

  if (!length) return false

  let start = 0
  let end

  // 找到第一个数小于目标的数组
  let lStart = 0
  let lEnd = matrix.length - 1
  while (lStart < lEnd) {
    const mid = Math.ceil((lStart + lEnd) / 2)

    if (matrix[mid][0] > target) {
      lEnd = mid - 1
    } else {
      lStart = mid
    }
  }

  if (matrix[lEnd][0] > target) {
    return false
  } else {
    end = lEnd
  }

  // 找到最后一个数大于目标的数组
  let rStart = start
  let rEnd = end
  while (rStart < rEnd) {
    const mid = Math.floor((rStart + rEnd) / 2)

    if (matrix[mid][length - 1] < target) {
      rStart = mid + 1
    } else {
      rEnd = mid
    }
  }

  if (matrix[rStart][length - 1] < target) {
    return false
  } else {
    start = rStart
  }

  // 对符合要求的数组，进行二分查找
  for (let i = start; i <= end; i++) {
    const arr = matrix[i]

    let subStart = 0
    let subEnd = length - 1
    while (subStart <= subEnd) {
      const mid = Math.floor((subStart + subEnd) / 2)
      const val = arr[mid]
      if (val === target) {
        return true
      } else if (val > target) {
        subEnd = mid - 1
      } else {
        subStart = mid + 1
      }
    }
  }

  return false
}

/**
 * 最快题解
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || matrix.length === 0) return false
  let x = matrix.length - 1,
    y = 0
  while (x >= 0 && y < matrix[x].length) {
    const current = matrix[x][y]
    if (current === target) {
      return true
    } else {
      if (current > target) {
        x--
      } else {
        y++
      }
    }
  }
  return false
}

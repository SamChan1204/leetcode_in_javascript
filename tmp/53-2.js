/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (!nums.length) return 0

  if (nums[0] !== 0) {
    return 0
  } else if (nums[nums.length - 1] === nums.length - 1) {
    return nums.length
  }

  let start = 0
  let end = nums.length - 1

  while (start < end) {
    const mid = Math.ceil((start + end) / 2)

    const val = nums[mid]
    if (val !== mid && nums[mid - 1] === mid - 1) {
      return val - 1
    } else if (val === mid) {
      start = mid
    } else if (val !== mid) {
      end = mid
    }
  }
}

/**
 * 最快题解
 */
var missingNumber = function (nums) {
  const n = nums.length
  let left = 0,
    right = n - 1
  //二分法
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] > mid) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[right] === right ? right + 1 : right
}

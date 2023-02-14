/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = 0

  let start = 0
  let end = nums.length - 1

  let index

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const val = nums[mid]
    if (val === target) {
      index = mid
      break
    } else if (val > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  if (index !== undefined) {
    result = 1
    let left = index - 1
    let right = index + 1

    while (left >= 0 && nums[left] === target) {
      result++
      left--
    }

    while (right <= nums.length - 1 && nums[right] === target) {
      result++
      right++
    }
  }

  return result
}

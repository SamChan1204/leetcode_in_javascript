/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (!map[val]) map[val] = 0

    map[val]++

    if (map[val] > nums.length / 2) return val
  }
}

/**
 * 最快题解
 */
var majorityElement = function (nums) {
  let major = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i]
      count++
    } else {
      if (nums[i] !== major) {
        count--
      } else {
        count++
      }
    }
  }

  return major
}

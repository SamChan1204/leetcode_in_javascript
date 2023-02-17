/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (map[val]) return val
    else map[val] = true
  }
}

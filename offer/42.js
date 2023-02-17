/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]

  let curSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (curSum < 0) curSum = nums[i]
    else curSum += nums[i]

    if (curSum > res) {
      res = curSum
    }
  }

  return res
}

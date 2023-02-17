/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroNum = 0
  const length = nums.length
  const stack = []

  for (let i = 0; i < length; i++) {
    const first = nums.shift()
    if (first === 0) {
      nums.push(0)
    } else {
      stack.push(first)
    }
  }

  nums.unshift.apply(nums, stack)
}

/**
 * 最快题解
 */
var moveZeroes = function (nums) {
  var slow = 0
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  while (slow < nums.length) {
    nums[slow] = 0
    slow++
  }
  return nums
}

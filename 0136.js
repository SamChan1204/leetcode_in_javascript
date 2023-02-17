/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (set.has(val)) {
      set.delete(val)
    } else {
      set.add(val)
    }
  }

  return [...set][0]
}

/**
 * 最快题解
 */
var singleNumber = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}

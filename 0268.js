/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const arr = []

  nums.forEach((n) => (arr[n] = true))

  for (let i = 0; i < nums.length; i++) {
    if (!arr[i]) return i
  }

  return nums.length
}

/**
 * 最快题解
 */
var missingNumber = function (nums) {
  let sum = 0
  nums.forEach((item) => {
    sum += item
  })
  return ((nums.length + 0) / 2) * (nums.length + 1) - sum
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false

  let cur = 1

  while (cur <= n) {
    if (cur === n) return true

    cur *= 3
  }

  return false
}

/**
 * 最快题解
 */
var isPowerOfThree = function (n) {
  return n > 0 && 3 ** 19 % n === 0
}

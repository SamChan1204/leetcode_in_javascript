/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const arr = n.toString(2).split('')
  while (arr.length < 32) {
    arr.unshift('0')
  }
  return parseInt(arr.reverse().join(''), 10)
}

/**
 * 位运算
 */
var hammingWeight = function (n) {
  let ret = 0
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ret++
    }
  }
  return ret
}

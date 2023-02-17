/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const arr = n.toString(2).split('')
  return arr.filter((item) => item === '1').length
}

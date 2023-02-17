/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1
  if (n === 2) return 2

  let a = BigInt(1)
  let b = BigInt(2)
  let res = BigInt(0)
  for (let i = 3; i <= n; i++) {
    res = BigInt(a + b)
    a = b
    b = res
  }

  return res % BigInt(1000000007)
}

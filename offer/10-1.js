/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1

  let a = BigInt(0)
  let b = BigInt(1)
  let res = BigInt(0)
  for (let i = 2; i <= n; i++) {
    res = BigInt(a + b)
    a = b
    b = res
  }

  return res % BigInt(1000000007)
}

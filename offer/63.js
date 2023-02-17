/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0

  let res = 0

  let curBase = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > curBase) {
      const profit = prices[i] - curBase
      if (profit > res) res = profit
    } else {
      curBase = prices[i]
    }
  }

  return res
}

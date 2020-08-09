/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentMax = 0;
  let currentMin = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - currentMin;
    if (diff > currentMax) {
      currentMax = diff;
    }
    
    if (prices[i] < currentMin) {
        currentMin = prices[i];
    }
  }

  return currentMax;
};

/**
 * 最快题解
 */
var maxProfit = function(prices) {
  const length = prices.length;
  if(length < 2) return 0;
  let max = prices[length - 1];
  let min = Number.MAX_VALUE;
  let res = 0;
  for(let i = length - 2; i >= 0; i--) {
    if(max < prices[i]) {
      min = max = prices[i];
    } else if (min > prices[i]) {
      res = Math.max(res, max - prices[i])
      min = prices[i];
    }
  }
  return res;
};
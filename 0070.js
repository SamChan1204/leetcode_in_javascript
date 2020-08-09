/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;

  function climb(num) {
    if (memo[num]) return memo[num];

    const res = climb(num - 1) + climb(num - 2);
    memo[num] = res;

    return res;
  }

  return climb(n);
};

/**
 * 自底向上
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = [,1,2];
  let i = 3;
  while(i <= n) {
    dp[i] = dp[i - 1] + dp[i - 2];
    i++;
  }

  return dp[n];
}

/**
 * 最快题解
 */
var climbStairs = function (n) {
  if (n <= 3)
      return n;
  var a = 1;
  var b = 2;
  var c = 3;
  n -= 3;
  while (n-- >= 0) {
      c = a + b;
      a = b;
      b = c;
  }
  return c;
};
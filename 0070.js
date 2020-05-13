/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let res = 0;

  function climb(x) {
    if ((x - 1) === 0) {
      res++;
    } else if ((x - 2) === 0) {
      res++;
      climb(x - 1);
    } else {
      climb(x - 1);
      climb(x - 2);
    }
  }

  climb(n);

  return res;
};
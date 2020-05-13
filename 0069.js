/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let result;
  let start = 0;
  let end = x;
  

  while(true) {
    const mid = Math.floor((start + end) / 2);
    const pow = mid * mid;
    if (pow === x) {
      result = mid;
      break;
    } else if (pow > x) {
      end = mid;
    } else {
      start = mid;
      if ((end - start) === 1) {
        result = end * end > x ? start : end;
        break;
      }
    }
    if (start === end) {
      result = start;
      break;
    }
  }

  return result;
};

/**
 * 最快题解
 */
var mySqrt = function(x) {
  let r = x;
  while(r*r > x)
    r = Math.floor((r + x/r)/2);
  return r;
};
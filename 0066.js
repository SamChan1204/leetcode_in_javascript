var plusOne = function(digits) {
  const l = digits.length;
  let curIndex = l - 1;
  
  do {
    digits[curIndex]++;
    if (digits[curIndex] >= 10) {
      digits[curIndex] = 0;
      curIndex--;

      if (curIndex < 0) {
        digits.unshift(1);
        break;
      }
    } else {
      break;
    }
  } while (curIndex >= 0);

  return digits;
};

/**
 * 最快题解
 */
var plusOne = function(digits) {

  let len = digits.length - 1;
  while(len >= 0) {
      if (digits[len] + 1 == 10) {
          digits[len] = 0;
      } else {
          digits[len] += 1;
          return digits;
      }
      len--;
  }
  
  if (digits[0] == 0) {
      digits.unshift(1);
  }
  return digits;
};
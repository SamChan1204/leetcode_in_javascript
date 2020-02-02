var romanToInt = function(s) {
  const map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
  };

  let result = 0;
  for (let i = 0, l = s.length; i < l; i++) {
      const cur = s[i];
      const next = s[i+1];
      if (next && map[`${cur}${next}`]) {
          result += map[`${cur}${next}`];
          i++;
      } else {
          result += map[`${cur}`];
      }
  }

  return result;
};

/**
 * 最快题解
 */
var romanToInt = function (s) {
  const valueMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = 0
  const len = s.length
  for (let i = 0; i < len - 1; i++) {
    const cur = valueMap[s[i]]
    if (valueMap[s[i]] < valueMap[s[i + 1]]) {
      res -= cur
    } else {
      res += cur
    }
  }
  res += valueMap[s[len - 1]]
  return res
};
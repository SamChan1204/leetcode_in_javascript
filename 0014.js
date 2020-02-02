/**
 * 逐位判断
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let result = strs[0];
  for (let i = 1, l = strs.length; i < l; i++) {
      const cur = strs[i];
      for (let j = 0, m = result.length; j < m; j++) {
          if (result[j] === cur[j]) {
              continue;
          } else {
              result = result.substring(0, j);
              break;
          }
      }
      if (!result) {
          break;
      }
  }

  return result;
};

/**
 * 最快题解
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  let commonStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(commonStr) != 0) {
          commonStr = commonStr.substring(0, commonStr.length - 1);
      }
  }
  return commonStr;
}
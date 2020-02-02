/**
 * 遍历
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  const re = new RegExp(needle);
  if (!re.test(haystack)) return -1;
  
  let result = -1;
  const l = needle.length;
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0] && haystack.substr(i, l) === needle) {
          return i;
      }
      
  }

  return result;
};

/**
 * 最快题解
 */
var strStr = function(haystack, needle) {
  const hayLen = haystack.length;
  const nedLen = needle.length;
  
  if (nedLen > hayLen) {
      return -1;
  } else if (nedLen === hayLen) {
      return haystack === needle ? 0 : -1;
  } else {
    for(let index = 0; index <= hayLen - nedLen; index++) {
      if (haystack.substring(index, index + nedLen) === needle) {
        return index
      }
    }
  }
   return -1;
};
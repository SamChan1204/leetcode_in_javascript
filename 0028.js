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
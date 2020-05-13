var lengthOfLastWord = function(s) {
  let segs = s.split(/\s+/);
  const l = segs.length;
  const last = segs[l-1] || segs[l-2];
  return last ? last.length : 0;
};

var lengthOfLastWord = function(s) {
  const string = s.replace(/\s+$/, '');
  let l = string.length;
  if (l === 0) return 0;
  if (l === 1) return 1;

  let start = l - 1;
  let end = start - 1;
  for (; end >= 0; end--) {
    if (string[end] === ' ') {
      end = end + 1;
      break;
    } else if (end === 0) {
      break;
    }
  }

  return start - end + 1;
}

/**
 * 最快题解
 */
var lengthOfLastWord = function(s) {
  const arr = s.trim().split(' ')
  return arr.length > 1 ? arr[arr.length -1].length: arr[0].length
};
/**
 * 栈实现
 */
var isValid = function(s) {
  const map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  const stack = [];
  for (let i = 0, l = s.length; i < l; i++) {
      const cur = s[i];
      if (['(', '{', '['].indexOf(cur) >= 0) {
          stack.push(cur);
      } else if (stack.pop() === map[cur]) {
          continue;
      } else {
          return false;
      }
  }
  return stack.length === 0;
};
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

/**
 * 最快题解
 */
var isValid = function(s) {
  let stack = []
  let obj = { "(":")","[":"]", "{":"}" }

  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    // 括号匹配
    
    if(ele in obj){
      stack.push(ele)
    }else {
      if(ele != obj[stack.pop()]){
        // 不匹配
        return false
      }
    }
    
  }
  // 栈是不是空的 return false
  // 空的 return true
  return !stack.length

};
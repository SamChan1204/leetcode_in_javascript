var countAndSay = function(n) {
  if (n === 1) return '1';

  const getNewStr = (str) => {
    const l = str.length;
    let curIndex = 0;
    let result = '';
    let curChar = str[curIndex];
    let curNum = 1;

    while(curIndex < l) {
      curIndex++;
      if (str[curIndex] !== curChar) {
        result += `${curNum}${curChar}`;
        curChar = str[curIndex];
        curNum = 1;
      } else {
        curNum++;
      }
    }
    
    return result;
  }

  let curStr = '1';
  for (let i = 2; i <= n; i++) {
    curStr = getNewStr(curStr);
  }

  return curStr;
};

/**
 * 最快题解
 */
var countAndSay = function (n) {
  let prev = '1'
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return prev
};
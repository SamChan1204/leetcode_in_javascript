/**
 * 直接反转对比
 */
var isPalindrome = function(x) {
  const str = x.toString();
  const rev = str.split('').reverse().join('');
  return str === rev;
};

/**
 * 两端向中心遍历逐位对比（不转为字符串）
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  // 先提取出各个位的数字
  const nums = [];
  while (x >= 1) {
      const n = x % 10;
      nums.push(n);
      x = Math.floor(x / 10);
  }

  for (let i = 0, l = nums.length - 1; i <= l - i; i++) {
      if (nums[i] !== nums[l - i]) return false;
  }

  return true;
};
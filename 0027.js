/**
 * 普通遍历
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1);
          i--;
      }
  }

  return nums.length;
};

/**
 * 先排序，整段移除
 */
var removeElement = function(nums, val) {
  nums.sort();

  const first = nums.indexOf(val);
  if (first >= 0) { 
      let last = first + 1;
      while (nums[last] === val) {
          last++;
      }
      nums.splice(first, last - first);
  }

  return nums.length;
};

/**
 * 最快题解
 */
var removeElement = function (nums, val) {
  while (nums.indexOf(val, 0) >= 0) { nums.splice(nums.indexOf(val, 0), 1); }
  return nums.length;
};
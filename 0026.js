/**
 * 普通遍历
 */
var removeDuplicates = function(nums) {
  for (let i = 1, l = nums.length; i < l; i++) {
      if (nums[i] === nums[i-1]) {
          nums.splice(i, 1);
          l--;
          i--;
      }
  }
  return nums.length;
};

/**
 * 整段删除
 */
var removeDuplicates = function(nums) {
  let fastI;
  let slowI = 0;

  while (slowI < nums.length) {
      fastI = slowI + 1;
      while (nums[fastI] === nums[slowI]) {
          fastI++;
      }

      const deleteNum = fastI - (slowI + 1);
      nums.splice(slowI + 1, deleteNum);

      slowI++;
  }

  return nums.length;
};
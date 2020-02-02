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

/**
 * 最快题解
 */
var removeDuplicates = function(nums) {
  if (nums.length == 1) {
      return 1;
  }
  let pre = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[pre] != nums[i]) {
          pre++;
          nums[pre] = nums[i];
      }
  }
  return pre + 1;
};
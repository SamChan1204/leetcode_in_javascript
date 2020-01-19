
/**
 * 哈希一次遍历
 */
const twoSum = function(nums, target) {
  let result;
  const map = {};
  for (let i = 0, l = nums.length; i < l; i++) {
      const n = nums[i];
      const rest = target - n;
      const restIndex = map[rest];
      if (restIndex !== undefined && restIndex !== i) {
          result = [restIndex, i];
          break;
      } else {
          map[n] = i;
      }
  }
  return result;
};

/**
 * 哈希两次遍历
 */
const twoSum = function(nums, target) {
  let result;
  const map = {};
  nums.forEach((n, i) => map[n] = i);
  for (let i = 0, l = nums.length; i < l; i++) {
      const rest = target - nums[i];
      const restIndex = map[rest];
      if (restIndex !== undefined && restIndex !== i) {
          result = [i, restIndex];
          break;
      }
  }
  return result;
};

/**
 * 非哈希，搜索
 */
const twoSum = function(nums, target) {
  var result;
  for (var i = 0, l = nums.length; i < l; i++) {
      var rest = target - nums[i];
      var restIndex = nums.indexOf(rest);
      if (restIndex >= 0 && restIndex !== i) {
          result = [i, restIndex];
          break;
      }
  }
  return result;
};
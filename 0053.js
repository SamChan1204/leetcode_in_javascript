var maxSubArray = function(nums) {
  let curSum = 0;
  let result = nums[0];

  nums.forEach(n => {
    if (curSum < 0) {
      curSum = n;
    } else {
      curSum += n; 
    }
    
    if (result < curSum) {
      result = curSum;
    }
  })

  return result;
};

/**
 * 最快题解
 */
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > 0) {
          nums[i] += nums[i-1];
      }
  }
  return Math.max(...nums);
};
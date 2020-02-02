/**
 * 二分查找
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;

  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (nums[middle] === target) return middle;
      if (target < nums[middle]) {
          end = middle - 1;
      } else {
          start = middle + 1;
      }
  }

  // 找不到时判断插入位置
  if ((start - end) === 1) {
      return start;
  } else if (nums[start - 1] > target) {
      return start - 1;
  } else {
      return start;
  }
};

/**
 * 最快题解
 */
var searchInsert = function(nums, target) {
  let lens =nums.length;
  let i =0,pos=0;
  nums.forEach((cur,index)=>{
      if(cur === target){
          return index;
      }else{
          pos = (target>cur)?(index+1):pos;
      }
  })
  return pos;
};
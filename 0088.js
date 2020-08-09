/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let tmp = [];

  if (m === 0) {
    tmp = nums2.slice(0, n);
  } else if (n === 0) {
    return;
  } else {

    let index1 = 0;
    let index2 = 0;

    while(true) {
      const num1 = nums1[index1];
      const num2 = nums2[index2];

      if (num1 <= num2) {
        tmp.push(num1);
        index1++;
      } else {
        tmp.push(num2);
        index2++;
      }

      if (index1 === m) {
        tmp = tmp.concat(nums2.slice(index2, n));
        break;
      } else if (index2 === n) {
        tmp = tmp.concat(nums1.slice(index1, m));
        break;
      }
    }
  }

  tmp.forEach((n, i) => nums1[i] = n);
};

/**
 * 最快题解
 */
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums2[n - 1] > nums1[m - 1]) {
      nums1[m + n - 1] = nums2[--n];
    } else {
      nums1[m + n - 1] = nums1[--m];
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[--n];
  }

};
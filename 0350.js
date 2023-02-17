/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return []

  const sorted1 = nums1.sort((prev, next) => prev - next)
  const sorted2 = nums2.sort((prev, next) => prev - next)

  const res = []

  let i = 0
  let j = 0

  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] === sorted2[j]) {
      res.push(sorted1[i])
      i++
      j++
    } else if (sorted1[i] < sorted2[j]) {
      i++
    } else {
      j++
    }
  }

  return res
}

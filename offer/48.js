/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  let curLength = 0
  let map = {}
  let curStart = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i)
    if (map[ch] === undefined || map[ch] < curStart) {
      map[ch] = i
    } else {
      res = Math.max(res, i - curStart)
      curStart = map[ch] + 1
      curLength = i - map[ch]
      map[ch] = i
    }
  }

  res = Math.max(res, s.length - curStart)

  return res
}

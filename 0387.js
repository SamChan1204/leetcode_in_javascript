/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const shown = []

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97
    if (!shown[index]) shown[index] = 0
    shown[index]++
  }

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97

    if (shown[index] === 1) return i
  }

  return -1
}

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = {}
  const arr = [{}]

  if (!s.length) return ' '

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if (map[c]) {
      arr[map[c]].total++
    } else {
      map[c] = arr.length
      arr.push({
        char: c,
        total: 1,
      })
    }
  }

  const res = arr.find((item) => item.total === 1)

  return res ? res.char : ' '
}

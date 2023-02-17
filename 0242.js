/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const maps = {}
  const mapt = {}

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i)

    if (!maps[code]) maps[code] = 0

    maps[code]++
  }

  for (let i = 0; i < t.length; i++) {
    const code = t.charCodeAt(i)

    if (!mapt[code]) mapt[code] = 0

    mapt[code]++
  }

  const keys = Object.keys(maps)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (maps[key] !== mapt[key]) return false
  }

  return true
}

/**
 * 最快题解
 */
var isAnagram = function (s, t) {
  const resSet = new Array(26).fill(0)
  for (i = 0; i < s.length; i++) {
    resSet[s.codePointAt(i) - 'a'.codePointAt(0)]++
  }
  for (i = 0; i < t.length; i++) {
    resSet[t.codePointAt(i) - 'a'.codePointAt(0)]--
  }
  for (i = 0; i < 26; i++) {
    if (resSet[i] != 0) return false
  }
  return true
}

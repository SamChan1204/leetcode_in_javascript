/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = `${num}`
  const map = {}
  return getTotal(str, map)
}

function getTotal(str, map) {
  if (!str.length) return 1
  if (map[str]) return map[str]

  let total = getTotal(str.slice(1), map)

  if (str.length >= 2 && str[0] !== '0') {
    const num = parseInt(str.slice(0, 2))
    if (num <= 25) {
      total += getTotal(str.slice(2), map)
    }
  }

  map[str] = total
  return total
}

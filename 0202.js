/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const shown = {}

  let cur = n
  while (true) {
    if (cur === 1) return true

    if (shown[cur]) return false

    shown[cur] = true

    cur = 0
    let tmp = cur
    while (tmp > 0) {
      cur += Math.pow(tmp % 10, 2)
      tmp = Math.floor(tmp / 10)
    }
  }
}

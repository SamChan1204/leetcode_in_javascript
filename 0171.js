/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const map = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  }

  let res = 0
  let pow = 1
  for (let i = columnTitle.length; i > 0; i--) {
    const c = columnTitle[i - 1]
    res += map[c] * pow
    pow *= 26
  }

  return res
}

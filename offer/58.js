/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

var reverseLeftWords = function (s, n) {
  const seg = s.slice(0, n)

  return `${s.slice(n)}${seg}`
}

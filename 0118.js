/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  if (numRows === 3) return [[1], [1, 1], [1, 2, 1]]

  const res = [[1], [1, 1], [1, 2, 1]]

  for (let i = 3; i < numRows; i++) {
    const prevs = res[i - 1]
    const current = []
    for (let j = 0; j < prevs.length - 1; j++) {
      current.push(prevs[j] + prevs[j + 1])
    }
    current.unshift(1)
    current.push(1)
    res.push(current)
  }

  return res
}

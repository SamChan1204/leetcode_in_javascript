/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (!grid.length || !grid[0].length) return 0

  const max = grid.map((row) => new Array(row.length))

  const m = max.length
  const n = max[0].length

  max[0][0] = grid[0][0]

  for (let i = 1; i < m; i++) {
    max[i][0] = max[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < n; j++) {
    max[0][j] = max[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      max[i][j] = Math.max(max[i][j - 1], max[i - 1][j]) + grid[i][j]
    }
  }

  return max[m - 1][n - 1]
}

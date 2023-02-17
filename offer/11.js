/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let start = 0
  let end = numbers.length - 1

  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    const val = numbers[mid]

    if (val < numbers[end]) {
      end = mid
    } else if (val > numbers[end]) {
      start = mid + 1
    } else {
      end--
    }
  }

  return numbers[start]
}

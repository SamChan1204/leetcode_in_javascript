/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.tmpStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (!this.tmpStack.length || x <= this.tmpStack[this.tmpStack.length - 1])
    this.tmpStack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const value = this.stack.pop()
  if (value === this.tmpStack[this.tmpStack.length - 1]) this.tmpStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.tmpStack[this.tmpStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

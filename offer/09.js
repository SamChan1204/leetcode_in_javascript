var CQueue = function () {
  this.stack = []
  this.tmpStack = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  // while (this.tmpStack.length) {
  //   this.stack.push(this.tmpStack.pop())
  // }
  this.stack.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.tmpStack.length && !this.stack.length) {
    return -1
  } else {
    if (!this.tmpStack.length) {
      while (this.stack.length) {
        this.tmpStack.push(this.stack.pop())
      }
    }

    const res = this.tmpStack.pop()

    return res
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

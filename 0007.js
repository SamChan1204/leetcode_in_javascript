/**
 * 转为字符串然后翻转
 */
var reverse = function(x) {
  const upStr = (Math.pow(2, 31) - 1).toString();
  const lowStr = (-Math.pow(2, 31)).toString();
  const limitLen = upStr.length;

  const inputStr = x.toString();
  const isNg = inputStr[0] === '-';
  let revStr;
  let limitStr;
  let isValid;
  if (isNg) {
      revStr = inputStr.replace('-', '').split('').reverse().join('');
      limitStr = lowStr.replace('-', '');
  } else {
      revStr = inputStr.split('').reverse().join('');
      limitStr = upStr;
  }

  if (revStr.length < limitLen) { // 如果位数比极值少，则肯定没溢出
      isValid = true;
  } else if (revStr.length > limitLen) { // 如果位数比极值多，则肯定溢出
      isValid = false;
  } else { // 位数与极值一样时，逐位对比
      isValid = true;
      for (let i = 0; i < limitLen; i++) {
          if (revStr[i] > limitStr[i]) { // 如果比极值对应位的数字大，则溢出
              isValid = false;
              break;
          } else if (revStr[i] < limitStr[i]) { // 如果比极值对应位的数字小，则不溢出
              break;
          }
          // 如果相等，继续对比
      }
  }

  let result = 0;
  if (isValid) {
      result = parseInt(`${isNg ? '-' : ''}${revStr}`);
  }

  return result;
};
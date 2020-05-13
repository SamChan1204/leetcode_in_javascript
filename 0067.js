var addBinary = function(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;

  let res = '';
  let numA;
  let numB;
  const la = a.length;
  const lb = b.length;
  let len = Math.min(a.length, b.length);
  let plus = 0;

  for (let i = 1; i <= len; i++) {
    numA = +a[la - i];
    numB = +b[lb - i];

    const sum = numA + numB + plus;
    if (sum >= 2) {
      res = `${sum - 2}${res}`;
      plus = 1;
    } else {
      res = `${sum}${res}`;
      plus = 0;
    }
  }

  let restStr;
  let restEnd;
  if (la > lb) {
    restEnd = la - len;
    restStr = a.substring(0, restEnd);
  } else {
    restEnd = lb - len;
    restStr = b.substring(0, restEnd);
  }

  if (plus) {
    if (!restStr.length) {
      restStr = '1'
    } else {
      restStr = restStr.split('');
      for (let i = restEnd - 1; i >= 0; i--) {
        if (restStr[i] === '1') {
          restStr[i] = '0';
        } else {
          restStr[i] = '1';
          break;
        }
      }
      restStr = restStr.join('');
      if (restStr[0] === '0') {
        restStr = `1${restStr}`;
      }
    }
  }
  res = `${restStr}${res}`;

  return res;
};

var addBinary = function(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;

  let res = '';
  let numA;
  let numB;
  const la = a.length;
  const lb = b.length;
  let len = Math.max(a.length, b.length);
  let plus = 0;

  for (let i = 1; i <= len; i++) {
    numA = (la - i >= 0) ? +a[la - i] : 0;
    numB = (lb - i >= 0) ? +b[lb - i] : 0;

    const sum = numA + numB + plus;
    if (sum >= 2) {
      res = `${sum - 2}${res}`;
      plus = 1;
    } else {
      res = `${sum}${res}`;
      plus = 0;
    }
  }

  if (plus) {
    res = `1${res}`;
  }

  return res;
};

/**
 * 最快题解
 */
var addBinary = function(a, b) {

  var pointer_a = a.length - 1;
  var pointer_b = b.length - 1;
  var new_s = "";
  var is_carry = false;
  while(pointer_a >=0 || pointer_b >=0){
      var current_a = parseInt(a[pointer_a]) ? 1 : 0;
      var current_b = parseInt(b[pointer_b]) ? 1 : 0;

      var new_v = current_a + current_b;

      if(is_carry){
          new_v++;
          is_carry = false;
          
      }
      if(new_v == 2){
          new_v = 0;
          is_carry = true;
      }
      else if(new_v == 3){
          new_v = 1;
          is_carry = true;
      }
      new_s = new_v.toString().concat("", new_s);
      pointer_a --;
      pointer_b --;
  }
  if(is_carry){
      var one = 1;
      new_s = one.toString().concat("", new_s);
  }

  return new_s;
};
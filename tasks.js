// sum of positive
function positiveSum(arr) {
  let arr2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0)
      arr2 += arr[i];
  }
  return arr2;
}

// opposite number
function opposite(number) {
  return -number;
} 

//Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
} 

//String repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

module.exports = {
  positiveSum,
  opposite,
  removeChar,
  repeatStr
}


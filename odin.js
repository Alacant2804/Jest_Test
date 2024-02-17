function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  console.log(newStr);
  return newStr;
}

const calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  divide: function divide(x, y) {
    return x / y;
  }
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  let shiftedCode = code;

  if (char.match(/[a-z]/i)) {
      const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      shiftedCode = ((code - base + shift) % 26 + 26) % 26 + base;
  }

  return String.fromCharCode(shiftedCode);
}

function caesarCipher(string, shift) {
  return string
      .split('')
      .map(char => shiftChar(char, shift))
      .join('');
}

function analyzeArray(array) {
  if (array.length === 0) {
      return {
          average: undefined,
          min: undefined,
          max: undefined,
          length: 0
      };
  } else {
      let sum = 0;
      let min = array[0];
      let max = array[0];
      const length = array.length;

      for (const num of array) {
          sum += num;
          if (num < min) {
              min = num;
          }
          if (num > max) {
              max = num;
          }
      }

      const average = sum / length;

      return {
          average: average,
          min: min,
          max: max,
          length: length
      };
  }
}


module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray
}
/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a === b && a + b > c) {
    return true;
  }
  if (a === c && a + c > b) {
    return true;
  }
  if (b === c && b + c > a) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const map = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
  };

  if (num < 10) {
    return map[num];
  }
  if (Math.floor(num / 10) === 1) {
    return `X${map[num % 10]}`;
  }
  if (Math.floor(num / 10) === 2) {
    return `XX${map[num % 10]}`;
  }
  return `XXX${map[num % 10]}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    switch (char) {
      case '-':
        res += 'minus';
        break;
      case '.':
        res += 'point';
        break;
      case ',':
        res += 'point';
        break;
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      default:
        throw new Error('Unknown char');
    }
    if (i < numberStr.length - 1) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2 - 1; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;
  while (numCopy > 0) {
    const last = numCopy % 10;
    if (last === digit) {
      return true;
    }
    numCopy = Math.floor(numCopy / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    rightSum = sum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = [];
  for (let i = 0; i < size; i += 1) {
    res[i] = [];
    for (let j = 0; j < size; j += 1) {
      res[i][j] = 0;
    }
  }

  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let cur = 1;

  while (cur <= size ** 2) {
    for (let i = left; i <= right; i += 1) {
      res[top][i] = cur;
      cur += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      res[i][right] = cur;
      cur += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      res[bottom][i] = cur;
      cur += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      res[i][left] = cur;
      cur += 1;
    }
    left += 1;
  }
  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copy = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copy[i] = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      copy[i][j] = matrix[i][j];
    }
  }

  const shallowCopy = matrix;
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j < copy[0].length; j += 1) {
      shallowCopy[i][j] = copy[copy.length - j - 1][i];
    }
  }
  return shallowCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function partition(start, end, pivot) {
    const array = arr;
    let j = start;
    let k = start;
    for (let i = start; i <= end; i += 1) {
      if (arr[i] < pivot) {
        const temp = arr[i];
        array[i] = array[k];
        array[k] = array[j];
        array[j] = temp;
        j += 1;
        k += 1;
      } else if (array[i] === pivot) {
        [array[k], array[i]] = [array[i], array[k]];
        k += 1;
      }
    }
    return [j - 1, k];
  }

  function quickSort(start = 0, end = arr.length - 1) {
    if (end - start < 1) return arr;
    const pivot = arr[getRandomInt(start, end)];
    const [leftEnd, rightStart] = partition(start, end, pivot);
    quickSort(start, leftEnd);
    quickSort(rightStart, end);
    return arr;
  }

  return quickSort();
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let curRes = str;
  const res = [curRes];
  for (let i = 1; i <= iterations; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < curRes.length; j += 1) {
      if (j % 2 === 0) {
        left += curRes[j];
      } else {
        right += curRes[j];
      }
    }
    curRes = left + right;
    if (curRes === str) {
      return res[iterations % res.length];
    }
    res[i] = curRes;
  }
  return curRes;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let curNumber = number;
  while (curNumber > 0) {
    const last = curNumber % 10;
    arr.push(last);
    curNumber = Math.floor(curNumber / 10);
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      let minIndex = i - 1;
      let min = arr[i - 1];
      for (let j = 0; j < i; j += 1) {
        if (arr[j] > arr[i] && arr[j] < min) {
          min = arr[j];
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      for (let k = 0; k < i - 1; k += 1) {
        for (let l = 0; l < i - k - 1; l += 1) {
          if (arr[l] < arr[l + 1]) {
            [arr[l], arr[l + 1]] = [arr[l + 1], arr[l]];
          }
        }
      }
      break;
    }
  }

  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += 10 ** i * arr[i];
  }
  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

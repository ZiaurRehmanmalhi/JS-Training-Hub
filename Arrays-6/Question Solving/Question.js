// Find the minimum and maximum element in an array

const numbers = [-44, -5, 1, 2, 4, 5, 56, 7, 8, 9, 53, 56, 34];

// minMax(numbers);

function minMax(numbers) {
  let min = 1000;
  let max = -1000;

  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  console.log("Minimum number of array :", min);
  console.log("Maximum number of array :", max);
}

// Array Reverse

// console.log(numbers);
function arrayReverse(numbers) {
  for (i = 0; i < numbers.length / 2; i++) {
    let startingValue = numbers[i];
    let endingValue = numbers[numbers.length - 1 - i];
    let tempVal = startingValue;
    numbers[i] = endingValue;
    numbers[numbers.length - 1 - i] = tempVal;
  }
  console.log(numbers);
}
// arrayReverse(numbers);

// Sort an Array in Ascending Order

function ascending(numbers) {
  for (i = numbers; i < numbers.length; i++) {
    for (j = i; j < i; i++) {
      let newArray = [];
      if (i < j) {
        newArray = i;
      }
    }
  }
  // console.log(numbers);
}
ascending(numbers);

var arr = [5, 10, 12, 15, 13];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1]) {
    // console.log(arr[i]);
  }
}

// alphabeticalOrder string
const alphabeticalOrder = (str) =>
  str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
// console.log(alphabeticalOrder("alphabeticalOrder"));

// unique characters from a function
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

console.log(getUniqueChars("UniqueChars"));

// Non Repeated Chars
const getNonRepeatedChars = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );
console.log(getNonRepeatedChars("aaabbbjds"));

var x = Math.floor(Math.random());
if (x > 0.5) {
  var x = 1;
} else {
  var x = 2;
}

// console.log(Math.floor(0.99));
// console.log(x);

// flatten an array of arrays
newArray = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];
const flattendArr = arr.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);

console.log(flattendArr);

// find the largest number in an array

const primeArr = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47];

function isPrime(number) {
  if (Number % 2 == 0 || number < 2) return false;
  for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
    if (number % fact == 0) return false;
  }
  return true;
}

// console.log(primeArr.sort((a, b) => a - b).findLast(isPrime));

// remove duplicate from an array
const numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 6, 7, 8, 9, 8, 9, 3, 4, 6, 7, 8, 9, 3,
];
const stringArray = [
  "Mike",
  "John",
  "Nancy",
  "Thomas",
  "Nancy",
  "Peter",
  "Mike",
];

const resultArray = [...new Set(numberArray)];
console.log(resultArray);
const resultStringArray = [...new Set(stringArray)];
console.log(resultStringArray);

function findSquareRoot(num) {
  if (num < 0) return NaN;
  let approx = num / 2;
  let betterApprox = (approx + num / approx) / 2;

  while (approx - betterApprox > 1e-10 || betterApprox - approx > 1e-10) {
    approx = betterApprox;
    betterApprox = (approx + num / approx) / 2;
  }
  return betterApprox;

  function findSquareRoots(arr) {
    return arr.map(findSquareRoot);
  }
}
const sqrNumbers = [4, 9, 16, 25, 36];
// const squareRoots = findSquareRoots(sqrNumbers);
// console.log(squareRoots);

// find if the given string is a palindrome or not

function checkPalindrome(name) {
  for (i = 0; i < name.length / 2; i++) {
    let startingValue = name[i];
    let endingValue = name[name.length - 1 - i];
    if (startingValue !== endingValue) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("civic"));

// Calculate the running some of arrays

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumber() {
  let sum = 0;
  newArray = [];
  for (count = 0; count < myNumbers.length; count++) {
    sum += myNumbers[count];
    newArray.push(sum);
  }
  console.log(newArray);
}
sumNumber();

// 100 prime numbers

totalNumbers = 100;
function primeNumbers() {
  for (let num = 2; num < totalNumbers; num++) {
    let isPrime = true;
    for (let index = 2; index <= num / 2; index++) {
      if (num % index === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}
// primeNumbers();

diamondCount = 5;
function PrintDiamond() {
  let stars = "";
  let spaces = "";

  for (let star = 0; star < diamondCount; star++) {
    stars += "* ";
    spaces = " ".repeat(diamondCount - star);
    console.log(`${spaces}${stars}`);
  }

  stars = "";
  spaces = "";
  for (let star = diamondCount; star >= 1; star--) {
    stars = "* ".repeat(star);
    spaces = " ".repeat(diamondCount - star);
    console.log(`${spaces} ${stars}`);
  }
}
PrintDiamond();

// Find the minimum and maximum element in an array

const numbers = [-44, -5, 1, 2, 4, 5, 56, 7, 8, 9, 53, 56, 34, 6];

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

console.log(numbers);
function arrayReverse(numbers) {
  for (i = 0; i < numbers.length; i++) {
    let startingIndex = 0;
    let endingIndex = numbers.length;

    let c = startingIndex;
    startingIndex = endingIndex;
    endingIndex = c;
    console.log(startingIndex, endingIndex);
  }
  console.log(numbers[0]);
}
arrayReverse(numbers);

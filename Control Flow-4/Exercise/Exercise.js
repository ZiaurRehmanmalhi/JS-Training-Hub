// Exercise 1
function max(a, b) {
    // if (a > b) return a;
    // else return b;
    return (a > b) ? a : b;
}

// console.log(max(11, 10));

// Exercise 2
function isLandscape(width, height) {
    // if (width > height) return true;
    // else return false;
    return width > height;
}

// console.log(isLandscape(600, 500));

// Exercise 3 fizzBuzz
function fizzBuzz(input) {
    if (typeof input !== 'number') return 'NOT A NUMBER'
    else if (input % 3 == 0 && input % 5 == 0) return 'fizzBuzz'
    else if (input % 3 == 0) return 'fizz'
    else if (input % 5 == 0) return 'Buzz'
    else return input
}
// console.log(fizzBuzz(15));

// Exercise 4 speed limit

function checkSpeed(speed){
    let speedLimit = 70;
    let KMPerPoint = 5;
    if (speed <= speedLimit) {
        console.log("OK")
    }
    else{
        const points = Math.floor((speed - speedLimit) / KMPerPoint);
        if (points >= 12)
            console.log('License suspended')
        else
            console.log(`Points: ${points}`)
    }
}
// checkSpeed(89);

// Exercise 5 print numbers

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 == 0) {
            console.log(i, 'Even Number');
        }
        else{
            console.log(i, 'Odd Number');
        }
    }
}
// showNumbers(10);


// Exercise 6 count truthy ???

array = [1, null, 'df', '', 'f', 2, 3, 4, 5]
function countTruthy(array){
    let count = 0;
    for(let value of array)
        if (value) 
            count++;
    return count;    
}
// console.log('limit',countTruthy(array));


// Exercise 7 string properties

const movie = {
    title: 'Movie',
    releaseYear: 2021,
    rating: 4.5,
    director: 'Director'
};

// showProperties(movie);

function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === 'string'){
            console.log(key, obj[key])
        }
    }
}

// Exercise 8 sum of multiple of 3 and 5

function sum(limit){
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    return sum;
}

// console.log(sum(10))


// Exercise 9 calculate grades
marks = [80, 78, 45, 69, 90];

function calculateGrades(marks){
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;
    if (average >= 80 ) return 'A';
    else if (average >= 70 ) return 'B';
    else if (average >= 60 ) return 'C';
    else if (average < 60 ) return 'F';

}
// console.log(calculateGrades(marks));

// Exercise 10 show stars

function showStars(rows) {
    for (let row=1; row <= rows; row++){
        let pattern = '';
        for (let i=0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
// showStars(5);

// Exercise 11 prime numbers

function showPrime(limit){
    for(let i = 2; i <= limit; i++){
        let isPrime = true;
        for(let j = 2; j < i; j++){
            if (i % j === 0) {
                isPrime=false
                break
            }
        }
        // debugger;
        if (isPrime) console.log(i)
    }
}   
// showPrime(23);

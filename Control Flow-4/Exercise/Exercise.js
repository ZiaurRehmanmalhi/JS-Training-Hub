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
    if (typeof input!== 'number') return 'NOT A NUMBER'
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
// console.log(countTruthy(array));


// Exercise 7 string properties

const movie = {
    title: 'Movie',
    releaseYear: 2021,
    rating: 4.5,
    director: 'Director'
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === 'string'){
            console.log(key, obj[key])
        }
    }
}
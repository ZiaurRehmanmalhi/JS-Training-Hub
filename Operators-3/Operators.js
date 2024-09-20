let x = 10;
let y = 5;

// console.log(x + y);
// console.log(x * y);
// console.log(x - y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);
// console.log(--x);
// console.log(x++);

// assignment operators

x = x + 2;
x += 2;
y = y * 2;
y *= 2;

// comparison operators

// console.log(x == y); // false
// console.log(x === y); // false
// console.log(x != y); // true
// console.log(x !== y); // true
// console.log(x > y); // false
// console.log(x < y); // true

// equality operators
// console.log(1==1);
// console.log(''==1);
// console.log(false==1);

// ternary operators

let points = 10;

let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// logical operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// let heightIncome = true;
// let goodScore = true;
// let eligibleForLoan = heightIncome && goodScore;
// console.log(eligibleForLoan);

// Logical Or (||)

// let heightIncome = false;
// let goodScore = false;
// let eligibleForLoan = heightIncome || goodScore;
// console.log(eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log(applicationRefused)

// logical operators with non boolean
let useColor = 'red';
let defaultColor = 'blue';
let currentColor = useColor || defaultColor;
// console.log(currentColor);

// bitwise operators
// console.log(1 | 2);
// console.log(1 | 6);
// console.log(1 & 2);

// swapping variables
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);

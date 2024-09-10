// --------------------------1 Question:-----------------------------------
// Write a JavaScript function that demonstrates the use of both let and const variables.
// 	Declare a variable using let, assign it a value, and then update the value.
// 	Use console.log to display the values before and after the updates.

function age() {
  let myAge = 20;
  console.log(myAge);
  myAge += 2;
  return myAge;
}
console.log(age());

// 	Declare a variable using const, assign it a value, and try to update the value.

function year() {
  const year = 2020;
  console.log();
  //   year += 4;
}
console.log(year());

// --------------------------2 Question:-----------------------------------
// Write a JavaScript function that takes an array as an argument. Inside the function:
// 	console.log an element along with its index.
function numberArray() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 	Add a new value to the array and console.log
  console.log(array);
  array[10] = 22;
  console.log(array.length);
  return array;
}

// 	console.log the new length of the array.
console.log(numberArray());

// --------------------------3 Question:-----------------------------------
// Write a JavaScript program that creates an object. Inside the object:
// 	Access and console.log each key and its value.
let person = {
  name: "John Doe",
  age: 20,
  city: "New York",
};
console.log("name = ", person.name);
console.log("age = ", person.age);
console.log("city = ", person.city);

// 	Add a new key-value pair to the object.
person["role"] = "Programer";

// 	console.log the updated object.
console.log("role = ", person.role);

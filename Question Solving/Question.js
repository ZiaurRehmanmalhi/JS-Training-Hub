// 1 Question:
// Write a JavaScript function that demonstrates the use of both let and const variables.
// 	Declare a variable using let, assign it a value, and then update the value.
// 	Declare a variable using const, assign it a value, and try to update the value.
// 	Use console.log to display the values before and after the updates.

function age(){
    var myAge = 20;
    console.log(myAge)
    var myAge = 24;
    return myAge;
}
console.log(age());



// 2 Question:
// Write a JavaScript function that takes an array as an argument. Inside the function:
// 	console.log an element along with its index.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(array)
// 	Add a new value to the array and console.log
array[10] = 22;
// 	console.log the new length of the array.
console.log(array.length)




// 3 Question:	
// Write a JavaScript program that creates an object. Inside the object:
// 	Access and console.log each key and its value.
let person = {
    name: "John Doe",
    age: 20,
    city: "New York"
}
console.log(person);

// 	Add a new key-value pair to the object.
person['role'] = "Programer";

// 	console.log the updated object.
console.log(person);

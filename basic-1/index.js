// Variables -----------------

let name = "zia";
let age = 22;
let firstName = undefined;
let isApproved = false;
let color = null;

// Object -------------------

let person = {
  name: "zia malhi",
  age: 22,
};

person["name"] = "ali";
person.name = "aaaa";

// console.log(person.name);

// Arrays --------------------

let selectedColor = ["red", "green", "blue"];
// console.log(selectedColor);

// functions ----------------

function greet(firstName, lastName) {
  console.log("Hello " + firstName, lastName);
}

// greet("zia", "malhi");
// greet();

// type of functions ----------------

function square(number) {
  return number * number;
}

var a = square(4);
var a = square(5);

console.log(a);

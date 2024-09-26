// Array.from()------

// console.log('From', Array.from('from'))
// console.log('From', Array.from([2, 3, 4], (x) => x + x))

// console.log('isArray', Array.isArray([1, 2, 3, 4]))
// console.log('isArray', Array.isArray('[]'))

// console.log(Array.isArray(new Array(3)))
// console.log(Array.isArray(new Int16Array([14, 33])))

// Array of
// console.log(Array.of('d', 34, 5, 'hi'))
// console.log(Array.of())

// Array.prototype.at()---------

// Array1 = [3, 4, 54, 64, 34, 23]

// console.log(Array1.at(2))
// console.log(Array1.at(-2))

// Array.prototype.concat()---------

let Array1 = ["a", "b", "c", "d"];
// let Array1 = [{ id: 1 }];
let Array2 = [1, 2, 3, 4];
// Array1[0].id = 10; // change id
// console.log(Array1.concat(Array2));
// console.log(Array1.entries().next().value);
// console.log(Array1.entries().next().value);

// console.log(Array1.fill(0, 1, 2))

const words = ["spray", "elite", "exuberant", "destruction", "present"];
result = words.filter((word) => word.length > 5);
// console.log(result)

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 100);

// console.log(found);

const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element === 50;

// console.log(array2.findIndex(isLargeNumber));

// ------------- Mosh course --------------
number = [2, 3, 2];
// End
number.push(4, 5, 6, 7, 8, 9);
// beginning
number.unshift(0, 1);
// middle
number.splice(2, 0, "a", "b");

console.log(number);

// console.log(number.indexOf(5));
// console.log(number.lastIndexOf(2));

// console.log(number.indexOf(1) !== -1);

// console.log(number.includes(1));

// remove from last number
// console.log(number.pop());

// remove from last number
// console.log(number.shift());
// console.log(number.splice(2, 2));

const courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "React.js" },
  { id: 3, name: "Node.js" },
];

const course = courses.find(function (course) {
  return course.name == "a";
});
// console.log(course);

// Make empty array 4 solutions
let ENumbers = [2, 3, 4, 5, 6];
// ENumbers = [];
// ENumbers.length = 0;
// ENumbers.splice(0, number.length);
while (ENumbers.length > 0) ENumbers.pop();
// console.log(ENumbers);

let a = [2, 3, 4, 5, -3];
let b = [5, 6, 7];
combine = [...a, ...b];
// console.log(combine);

// for (let num of a) console.log(num);
a.forEach(function (index, a) {
  //   console.log(index, a);
});

const joining = a.join(",");
// console.log(joining);

const paragraph = "this is my first paragraph";
const parts = paragraph.split(" ");
const combined = parts.join("-");
// console.log(parts);
// console.log(combined);
// a.sort();
console.log(a);
// a.reverse();
// console.log(a);

courses.sort(function (a, b) {
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();

  if (nameA < nameB) return -1;
  if (nameB > nameA) return 1;
  return 0;
});
// console.log(courses);

let filtered = a.filter(function (value) {
  return value >= 4;
});

// console.log(filtered);

let filter = a.filter((n) => n >= 0);
const items = filter.map((n) => "<li>" + n + "</li>");
const html = items.join();
console.log(html);

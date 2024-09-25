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

Array1 = ['a', 'b', 'c', 'd']
Array2 = [1, 2, 3, 4,]

// console.log(Array1.concat(Array2))

// console.log(Array1.entries().next().value);
// console.log(Array1.entries().next().value);

// console.log(Array1.fill(0, 1, 2))

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter((word) => word.length > 5)
// console.log(result)

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 100);

// console.log(found);

const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element === 50;

// console.log(array2.findIndex(isLargeNumber));
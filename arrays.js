/**
On mutation:

never mutate arrays. it can break you code.
If is necessary to mutate an array, always use 'slice' to make a copy.
 
 */

const array = [1, 2, 3, 4];
const copy = array.slice();

console.log(array);
console.log(copy);

//Use these methods only after you slice an array
copy.push(5);
copy.pop();
copy.unshift(0);
copy.shift();
copy.splice(0, 0, 0);

/**
 * Adding items to arrays
 */

//At start using spread operator

const afterStart = [1, 2, ...array];
console.log(afterStart);

//At the end using spread operator
const afterEnd = [...array, 6, 7];
console.log(afterEnd);

//In the middle
const fruits = ['apple', 'banana', 'papaya', 'orange', 'pineapple'];
const index = fruits.indexOf('banana');
const result = fruits.slice();
result.splice(index + 1, 0, 'pear');
console.log(result);

/**
 * Removing items from an array
 */

 //At start
const [throwaway, ...stayEnd] = array;
console.log(stayEnd);

//At the end
const stayStart = array.slice(0, -2);
console.log(stayStart);

//or

array.pop();
console.log(array);

//In the middle
const resultFruits = fruits.slice();
resultFruits.splice(index, 1);
console.log(resultFruits);


/**
 * Looping throught arrays
 */

 //Map
const array = [1, 2, 3, 4];
const doubled = array.map(x => x * 2);
console.log(doubled);

//Filter
const array = [1, 5, 10];
const below6 = array.filter(x => x < 6);
console.log(below6);

//Reducing an array of numbers
const array = [1, 2, 3, 4];
const sum = array.reduce((total, current) => total + current, 0);
console.log(sum);

/**
 * Turn arrays into objects
 */

const fruits = ['apple', 'banana', 'papaya', 'orange', 'pineapple'];

//with forEach
const tally = [];
fruits.forEach(fruit => {
  if (tally[fruit]) {
    tally[fruit] += 1;
    return;
  }
  tally[fruit] = 1;
});

console.log(tally);

//With reduce
const tally = fruits.reduce((tally, fruit) => {
  if (tally[fruit]) {
    tally[fruit] += 1;
  } else {
    tally[fruit] = 1;
  }
  return tally;
});

console.log(tally);


/**
 * To change classes
 */

const nodes = document.querySelectorAll('.hey');

//with forEach
[...nodes].forEach(node => {
  node.classList.remove('hey');
});

//with for...of
for (const node of nodes) {
  node.classList.remove('hey');
}

/**
 * Asynchronous loops
 */

//Using promises

const array = ['url1', 'url2'];
const promises = array.map(url => fetch(url).then(/*...*/));
const results = Promise.all(promises);

console.log(results);

//Using async/await

async function execute() {
  for (const link of links) {
    await fetch(link).then()
    // Do something...
  }
}

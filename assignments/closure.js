// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const var1 = 'ABC';
function myFunction() {
  const var2 = 'XYZ'
  console.log(`My function sees var1 and its value of: ${var1}`);
  return var2;
}
console.log(var1);
//the line below will return an error
//console.log(var2);
console.log(myFunction());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return function countingFunct () {
    num++;
    return num;
  }
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(counter());

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


const thirdCounter = counter();
console.log(thirdCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (initValue) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = initValue 
  return {
      "increment": function() {
      count++;
      return count;
    },

    "decrement": function() {
      count--;
      return count;
    }
  }
};

const test = counterFactory(1000);
console.log(test);

console.log(test.increment());
console.log(test.increment());
console.log(test.increment());
console.log(test.decrement());
console.log(test.increment());

const testAgain = counterFactory(100);
console.log(testAgain.increment());
console.log(testAgain.increment());
console.log(test.increment());

// const countDown = counterFactory(100).decrement;
// console.log(countDown());
// console.log(countDown());
// console.log(countDown());
// console.log(countDown());
// console.log(countDown());


// const countUp = counterFactory(10).increment;
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());


// console.log(countDown());
// console.log(countDown());
// console.log(countUp());


// ====== trying another way =====
const betterFactory = (initValue) => { 
  return {
      "count": initValue,
      "increment": function() {
      this.count++;
      return this.count;
    },

    "decrement": function() {
      this.count--;
      return this.count;
    }
  }
};

const bothWays = betterFactory(50);
console.log(bothWays);
console.log(bothWays.increment());
console.log(bothWays.increment());
console.log(bothWays.increment());
console.log(bothWays.increment());
console.log(bothWays.decrement());
console.log(bothWays.decrement());
console.log(bothWays.decrement());
console.log(bothWays.increment());

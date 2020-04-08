// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 
// preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 

// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = (num, cache) => {

  // Store our prior values to decrease computations
  cache = cache || {};

  // Base case - run until there is a duplicate
  if ( cache[num] ) return cache[num];

  // Handles beginning fibonacci sequence
  if ( num <= 0 ) return 0;
  if ( num === 1 ) return 1;

  // General case
  return cache[num] = 
    fibonacci(num - 1, cache) + 
    fibonacci(num - 2, cache);
};

module.exports = {
  fibonacci
};
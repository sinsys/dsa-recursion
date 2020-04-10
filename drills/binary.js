// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 
// 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 
// 0 should be 0.

const binary = (int, acc) => {

  // Stash our divisions
  acc = acc || [];

  // Very base cases. Just return the value before recursion
  if ( acc.length === 0 && int === 0 ) return "0";
  if ( acc.length === 0 && int === 1 ) return "1";

  // Base case
  if (int === 0) return acc.reverse().join('');

  // General case
  acc.push(int % 2);

  return binary(Math.floor(int / 2), acc);

}

module.exports = {
  binary
}
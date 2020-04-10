// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020 
// Output: ["02", "20", "2020"]

const stringSplit = (string, delimiter, array) => {

  let str = string.trim();
  let words = array || [];
  let index = str.indexOf(delimiter);

  // Base case
  if (index < 0 ) {
    words.push(str);
    return words;
  }

  // General case
  words.push(str.substr(0, index));
  return stringSplit(str.slice(index + 1), delimiter, words);
}

module.exports = {
  stringSplit
}
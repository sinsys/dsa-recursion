// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. 
// That number should be the number of sheep you have. The function should display the number along with the message "Another 
// sheep jumps over the fence" until no more sheep are left.

// Input: 3 
// Output:
//   3: Another sheep jumps over the fence
//   2: Another sheep jumps over the fence
//   1: Another sheep jumps over the fence
//   All sheep jumped over the fence

const countingSheep = (count, array) => {

  let phrases = array || [];

  // Base case
  if ( count <= 0 ) {
    phrases.push("All sheep jumped over the fence");
    return phrases.join('\n');
  };

  // General case
  console.log();
  phrases.push(`${count}: Another sheep jumps over the fence.`);
  return countingSheep(--count, phrases);
};

module.exports = {
  countingSheep
};
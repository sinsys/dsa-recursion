const prompts = require('prompts');
const { countingSheep } = require('./drills/counting-sheep.js');

const questions = [
  {
    type: 'number',
    name: 'drillNum',
    message: `Select a recursive algorithm:
      [1] Counting Sheep
      [2] Power Calculator
      [3] Reverse String
      [4] nth Triangular Number
      [5] String Splitter
      [6] Fibonacci
      [7] Factorial
      [8] Find a way out of the maze
      [9] Find ALL the ways out of the maze
      [10] Anagrams
      [11] Organization Chart
      [12] Binary Representation
      ________________________________
      [0] Display all with examples
    `
  }
];
 
(async () => {
  const response = await prompts(questions);
  switch ( response.drillNum ) {
    case 1: return (
      await prompts({
        type: 'number',
        name: 'sheepCount',
        message: 'How many sheep to count down from?'
      }).then(count => {
        console.log(countingSheep(count.sheepCount));
      })
    );
    default: return console.log("That isn't a valid selection");
  }
})();
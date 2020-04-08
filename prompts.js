const prompts = require('prompts');
const { countingSheep } = require('./drills/counting-sheep.js');
const { powerCalculator } = require('./drills/power-calculator');
const { reverseString } = require('./drills/reverse-string');
const { nthTriangularNumber } = require('./drills/nth-triangular-number');
const { stringSplit } = require('./drills/string-split');

// May use this later
const displayQuestions = (input, output, eachInput, eachOutput) => {
  console.log(`
    What is the input to the program? ${input}
    What is the output of the program? ${output}
    What is the input to each recursive call? ${eachInput}
    What is the output of each recursive call? ${eachOutput}
  `);
};

const questions = [
  {
    type: 'number',
    name: 'drillNum',
    message: `Select a recursive algorithm:
-------------------------------
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
------------------------------------------
  [777] Display all with example arguments
------------------------------------------
  [0] Exit       |
------------------
`
  }
];

const recursivePrompts = async () => {

  const response = await prompts(questions);
  switch ( response.drillNum ) {
    case 1: 
      console.log(`
Counting Sheep
--------------`);
      return (
        await prompts({
          type: 'number',
          name: 'sheepCount',
          message: `How many sheep would you like to count down from?`
        }).then(res => {
          console.log(countingSheep(res.sheepCount));
          recursivePrompts();
        })
      );
    case 2: 
      console.log(`
Power Calculator
----------------`);
      return (
        await prompts([{
          type: 'number',
          name: 'baseNum',
          message: `What is your base number?`
        },{
          type: 'number',
          name: 'expNum',
          message: `What is your exponent?`
        }]).then(res => {
          console.log(powerCalculator(res.baseNum, res.expNum));
          recursivePrompts();
        })
      );
      case 3: 
      console.log(`
Reverse String
--------------`);
      return (
        await prompts({
          type: 'text',
          name: 'properString',
          message: `Which string would you like to reverse?`
        }).then(res => {
          console.log(reverseString(res.properString));
          recursivePrompts();
        })
      );
      case 4: 
      console.log(`
nth Triangular Number
---------------------`);
      return (
        await prompts({
          type: 'number',
          name: 'factorNum',
          message: `Which index of a triangular number would you like?`
        }).then(res => {
          console.log(nthTriangularNumber(res.factorNum));
          recursivePrompts();
        })
      );
      case 5: 
      console.log(`
String Split
------------`);
      return (
        await prompts([{
          type: 'text',
          name: 'baseString',
          message: `What string would you like to split?`
        },{
          type: 'text',
          name: 'delimiter',
          message: `What value do you want to split against?`
        }]).then(res => {
          console.log(stringSplit(res.baseString, [], res.delimiter));
          recursivePrompts();
        })
      );
    case 0: return console.log("Sorry to see you go!");
    case 777: return (
      console.log("All algorithms with samples")
    );
    default: 
      console.log("That isn't a valid selection");
      recursivePrompts();
  };
};

recursivePrompts();

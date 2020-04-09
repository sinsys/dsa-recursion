const prompts = require('prompts');
const { countingSheep } = require('./drills/counting-sheep.js');
const { powerCalculator } = require('./drills/power-calculator');
const { reverseString } = require('./drills/reverse-string');
const { nthTriangularNumber } = require('./drills/nth-triangular-number');
const { stringSplit } = require('./drills/string-split');
const { fibonacci } = require('./drills/fibonacci');
const { factorial } = require('./drills/factorial');
const { findWayOutOfMaze } = require('./drills/find-way-out-of-maze');
const { findAllWaysOutOfMaze } = require('./drills/find-all-ways-out-of-maze');
const { anagrams } = require('./drills/anagrams');
const { organizationChart } = require('./drills/org-chart');

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
  // Used for #8 and #9
  let maze1 = [
    ['S', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'E']
  ];

  let maze2 = [
    ['S', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'E']
  ];

  let maze3 = [
    ['S', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', '*', ' ', ' ', ' ', '*', '*', '*', '*', ' '],
    ['*', ' ', '*', '*', '*', '*', '*', ' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' '],
    ['*', '*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' '],
    [' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' '],
    [' ', '*', '*', '*', ' ', ' ', ' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', '*', ' ', '*', ' ', '*', '*', '*', '*'],
    [' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', 'E']
  ];

  let sampleOrgChart = {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: '',
          Kyle: '',
          Andra: ''
        },
        Zhao: {
          Richie: '',
          Sofia: '',
          Jen: ''
        }
      },
      Shrage: {
        VanDyck: {
          Sabrina: '',
          Michelle: '',
          Josh: ''
        },
        Swain: {
          Blanch: '',
          Tom: '',
          Joe: ''
        }
      },
      Sandberg: {
        Goler: {
          Eddie: '',
          Julie: '',
          Annie: ''
        },
        Hernandex: {
          Rowi: '',
          Inga: '',
          Morgan: ''
        },
        Moissinac: {
          Amy: '',
          Chuck: '',
          Vinni: ''
        },
        Kelley: {
          Eric: '',
          Ana: '',
          Wes: ''
        }
      }
    }
  };
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
          message: `What separator do you want to split against?`
        }]).then(res => {
          console.log(stringSplit(res.baseString, [], res.delimiter));
          recursivePrompts();
        })
      );
    case 6: 
      console.log(`
Fibonacci
---------`);
      return (
        await prompts({
          type: 'number',
          name: 'fibNum',
          message: `Which index of the Fibonacci sequence would you like?`
        }).then(res => {
          console.log(fibonacci(res.fibNum));
          recursivePrompts();
        })
      );
    case 7: 
      console.log(`
Factorial
---------`);
      return (
        await prompts({
          type: 'number',
          name: 'facNum',
          message: `Which number would you like the factorial for?`
        }).then(res => {
          console.log(factorial(res.facNum));
          recursivePrompts();
        })
      );
    case 8: 
      console.log(`
Find a way out of the maze
--------------------------`);
      return (
        await prompts({
          type: 'number',
          name: 'mazeNum',
          message: `Which maze would you like to run the algorithm on?
[1] Small
[2] Medium
[3] Big
`
        }).then(res => {
          let maze;
          switch (res.mazeNum) {
            case 1: maze = maze1;
              break;
            case 2: maze = maze2;
              break;
            case 3: maze = maze3;
              break;
            default: return "That is not a valid selection";
          }
          // Display results
          //console.time('Algorithm Timer');
          console.log(findWayOutOfMaze(maze));
          //console.timeEnd('Algorithm Timer');

          // Display the maze
          let mazeStr = maze.map(row => {
            row.unshift("*");
            row.push("*");
            return row.join(' ');
          }).join('\n');
          const fillRow = [];
          const length = maze[0].length;
          for(let i = 0; i < length; i++) {
            fillRow.push('*');
          };
          mazeStr = `\n${fillRow.join(' ')}\n${mazeStr}\n${fillRow.join(' ')}\n`;
          console.log(mazeStr);
          // End display maze

          recursivePrompts();
        })
      );
    case 9: 
      console.log(`
Find ALL the ways out of the maze
---------------------------------`);
      return (
        await prompts({
          type: 'number',
          name: 'mazeNum',
          message: `Which maze would you like to run the algorithm on?
[1] Small
[2] Medium
[3] Big
`
        }).then(res => {
          let maze;
          switch (res.mazeNum) {
            case 1: maze = maze1;
              break;
            case 2: maze = maze2;
              break;
            case 3: maze = maze3;
              break;
            default: return "That is not a valid selection";
          }
          // Display results
          // console.time('Algorithm Timer');
          console.log(findAllWaysOutOfMaze(maze));
          // console.timeEnd('Algorithm Timer');

          // Display the maze
          let tempMaze = maze;
          let mazeStr = tempMaze.map(row => {
            row.unshift("*");
            row.push("*");
            return row.join(' ');
          }).join('\n');
          const fillRow = [];
          const length = tempMaze[0].length;
          for(let i = 0; i < length; i++) {
            fillRow.push('*');
          };
          mazeStr = `\n${fillRow.join(' ')}\n${mazeStr}\n${fillRow.join(' ')}\n`;
          console.log(mazeStr);
          // End display maze

          recursivePrompts();
        })
      );
    case 10: 
      console.log(`
Anagrams
--------`);
      return (
        await prompts({
          type: 'text',
          name: 'anaStr',
          message: `Which string would you like anagrams for?
*** Limit 5 characters ***
`
        }).then(res => {
          if ( res.anaStr.length > 5 ) {
            console.log("Your string is too long and may affect terminal performance");
            return recursivePrompts();
          }
          console.log(anagrams(res.anaStr));
          recursivePrompts();
        })
      );
    case 11: 
      console.log(`
Organization Chart
------------------`);
      return (
        console.log(organizationChart(sampleOrgChart).join('\n')),
        recursivePrompts()
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

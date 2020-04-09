// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the 
// Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.
// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner 
// and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go 
// outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked 
// passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed 
// before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

const findWayOutOfMaze = (maze, validPaths, winningPaths, iterations) => {
  // Setup defaults
  validPaths = validPaths || [
    { path: [], location: [0,0], prevLocations: [] }
  ];
  winningPaths = winningPaths || [];
  iterations = iterations || 0;

  // Base Case
  if ( winningPaths.length > 0 ) { 
    console.log(`Performed ${iterations} iterations.`);
    return (
      winningPaths.map(path => 
        "Path to the exit: " + path.path.join('')
      ).join('\n')
    );
  };

  // Helper function to determine if location was visited
  const checkPrevMoves = (prevLocations, newLocation) => {
    let valid = true;
    prevLocations.map(loc => {
      if ( loc[0] === newLocation[0] && loc[1] === newLocation[1] ) valid = false;
    });
    return valid;
  };

  // Helper function to determine a win
  const checkWin = (location, winLocation) => {
    return location[0] === winLocation[0] && location[1] === winLocation[1];
  };

  // Collect new valid paths
  const newValidPaths = [];
  
  validPaths.map(path => {
    let locRow = path.location[0];
    let locCol = path.location[1];
    if ( checkWin(path.location, [maze.length - 1, maze[0].length - 1]) ) {
      winningPaths.push(path);
    } else {
      // Handle right cases
      if ( 
        locCol + 1 < maze[0].length &&
        maze[locRow][locCol + 1] !== '*' &&
        checkPrevMoves(path.prevLocations, [locRow, locCol + 1])
      ){
        newValidPaths.push({
          path: [...path.path, "R"],
          location: [locRow, locCol + 1],
          prevLocations: [...path.prevLocations, path.location]
        })
      }
      // Handle down cases
      if ( 
        locRow + 1 < maze.length &&
        maze[locRow + 1][locCol] !== '*' &&
        checkPrevMoves(path.prevLocations, [locRow + 1, locCol])
      ){
        newValidPaths.push({
          path: [...path.path, "D"],
          location: [locRow + 1, locCol],
          prevLocations: [...path.prevLocations, path.location]
        })
      }
      // Handle left cases
      if ( 
        locCol - 1 >= 0 &&
        maze[locRow][locCol - 1] !== '*' &&
        checkPrevMoves(path.prevLocations, [locRow, locCol - 1])
        
      ){
        newValidPaths.push({
          path: [...path.path, "L"],
          location: [locRow, locCol - 1],
          prevLocations: [...path.prevLocations, path.location]
        })
      }
      // Handle up cases
      if ( 
        locRow - 1 >= 0 &&
        maze[locRow - 1][locCol] !== '*' &&
        checkPrevMoves(path.prevLocations, [locRow - 1, locCol])
      ){
        newValidPaths.push({
          path: [...path.path, "U"],
          location: [locRow - 1, locCol],
          prevLocations: [...path.prevLocations, path.location]
        })
      }
    }
  });
  return findWayOutOfMaze(maze, newValidPaths, winningPaths, iterations + 1);
};

module.exports = {
  findWayOutOfMaze
};
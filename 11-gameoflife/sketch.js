// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;
const GRID_SIZE = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genRandGrid(GRID_SIZE, GRID_SIZE);

  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = genRandGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "e") {
    grid = genEmptGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === " ") {
    grid = nextTurn();
  }
}

function nextTurn() {
  let nextTurnGrid = genEmptGrid(GRID_SIZE, GRID_SIZE);
  
  //Look at every cell
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      //Count neighbours
      let neighbours = 0;

      //look at all cells around in 3x3 grid
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //detect edge cases
          if (y + i >= 0 && y + i < GRID_SIZE && x + j >= 0 && x + j < GRID_SIZE) {
            neighbours += grid[y+i][x+j];
          }
        }
      }
      //be carful about counting self
      neighbours -= grid[y][x];

      //apply rules
      if (grid[y][x] === 1) {
        if (neighbours === 2 || neighbours === 3) { 
          nextTurnGrid[y][x] = 1;  
        }
        else {
          //died lonley or over population
          nextTurnGrid[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) { //dead
        if (neighbours === 3) {
          nextTurnGrid[y][x] = 1;
        }
        else {
          nextTurnGrid[y][x] = 0;
        }

      }
    }
  }
  return nextTurnGrid;
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y); // current cell
}

function toggleCell(x, y) {
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid() {
  for(let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function genRandGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }  
  return newGrid;
}


function genEmptGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }  
  return newGrid;
}
// 2D array grid
// Jeremy Tratch
// October 24, 2023

// let grid = [[1, 0, 0, 1, 1],
//             [0, 1, 1, 0, 1],
//             [1, 0, 1, 0, 1],
//             [0, 0, 1, 1, 1]
//             [1, 1, 1, 0, 0]];

let grid;
let cellSize;
const GRID_SIZE = 9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE;
  }

  grid = gererateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = gererateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "e") {
    grid = gererateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      if (grid[y][x] === 1) {
        fill("white");
      } 
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}


function gererateRandomGrid(cols, rows ) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        randomArray[y].push(0);
      }
      else {
        randomArray[y].push(1);
      }
    }
  }
  return randomArray;
}

function gererateEmptyGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      randomArray[y].push(0);
    }
  }
  return randomArray;
}

function mousePressed() {
  let  y = Math.floor(mouseY/cellSize);
  let  x = Math.floor(mouseX/cellSize);

  if (grid [y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
}
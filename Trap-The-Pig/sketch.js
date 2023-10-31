// Block Catch
// Jeremy Tratch
// October 27, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;
const GRID_SIZE = 40;
let playerX = 0;
let playerY = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genRandGrid(GRID_SIZE, GRID_SIZE);

  grid[playerY][playerX] = 9;

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
  else if (key === "s") {
    movePlayer(0, 1);
  }
  else if (key === "w") {
    movePlayer (0, -1);
  }
  else if (key === "a") {
    movePlayer(-1, 0);
  }
  else if (key === "d") {
    movePlayer(1, 0);
  }
}

function movePlayer(x, y) {
  if (playerX + x >= 0 && playerX + x < GRID_SIZE && playerY + y >= 0 && playerY + y < GRID_SIZE) {
    // check for wall
    if (grid[playerY + y][playerX + x] === 0) {
      let tempX = playerX;
      let tempY = playerY;

      playerX += x;
      playerY += y;

      //update grid
      grid[playerY][playerX] = 9;
      grid[tempY][tempX] = 0;
    }
  }
}


function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y); // current cell
  // toggleCell(x, y - 1); // north neigbour
  // toggleCell(x, y + 1); // south
  // toggleCell(x + 1, y); // east
  // toggleCell(x - 1, y); // west
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
      else if (grid[y][x] === 9) {
        fill("green");
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

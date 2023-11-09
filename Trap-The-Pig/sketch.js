// Trap The Pig
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
let maze1;
let maze2;
let maze3;
let mazeScreen;
let state = "start screen";


function preload() {
  maze1 = loadJSON("maze1.json");

  maze2 =loadJSON("maze2.json");

  maze3 = loadJSON("maze3.json");

  mazeScreen = loadImage("startMaze.jpg");
}

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
  if  (state === "start screen") {
    startScreen();
  }
  if (state === "run game") {
    background(220);
    grid = maze1;
    displayGrid();
  }
}

function startScreen() {
  image(mazeScreen, 0, 0, width, height);
}

function keyTyped() {
  if (key === " ") { 
    state = "run game";
  }
  else if (key === "h") {
    grid = maze2;
  }
  else if (key === "j"){
    grid = maze3;
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

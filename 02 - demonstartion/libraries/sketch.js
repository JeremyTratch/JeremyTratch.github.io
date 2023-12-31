// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBall = {
  x: 100,
  y: 100,
  radius: 25,
  r: 255,
  g: 0,
  b: 0,
  dx: 4,
  dy: 3,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();

}

function moveBall() {
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  if (theBall.x > width) {
    theBall.x = 0 - theBall.radius;
  }

  if (theBall.y > height) {
    theBall.y = 0 - theBall.radius;
  }
}

function displayBall() {
  fill(theBall.r, theBall.g, theBall.b)
  
}
